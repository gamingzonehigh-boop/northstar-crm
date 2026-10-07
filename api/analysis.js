import { db } from "hatchable";
export const access = "member";
export const methods = ["GET"];
export default async function(req,res){
  try{
    const q = await db.query(`
      SELECT jsonb_build_object(
        'summary', jsonb_build_object(
          'customers',(SELECT count(*)::int FROM customers),
          'revenue',(SELECT coalesce(sum(total_spend),0) FROM customers),
          'avg_spend',(SELECT coalesce(avg(total_spend),0) FROM customers),
          'orders',(SELECT coalesce(sum(orders_count),0)::int FROM customers),
          'high_value',(SELECT count(*)::int FROM customers WHERE total_spend>=5000),
          'repeat_customers',(SELECT count(*)::int FROM customers WHERE orders_count>1)
        ),
        'spend',coalesce((SELECT jsonb_agg(to_jsonb(x) ORDER BY x.sort_order) FROM (
          SELECT CASE WHEN total_spend<1000 THEN 'Under ₹1k'
                      WHEN total_spend<5000 THEN '₹1k–₹5k'
                      WHEN total_spend<10000 THEN '₹5k–₹10k'
                      ELSE '₹10k+' END bucket,
                 count(*)::int customers,coalesce(sum(total_spend),0) revenue,
                 CASE WHEN total_spend<1000 THEN 1 WHEN total_spend<5000 THEN 2 WHEN total_spend<10000 THEN 3 ELSE 4 END sort_order
          FROM customers GROUP BY 1,4
        ) x),'[]'::jsonb),
        'repeat',coalesce((SELECT jsonb_agg(to_jsonb(x)) FROM (
          SELECT CASE WHEN orders_count<=1 THEN 'One-time' ELSE 'Repeat' END type,count(*)::int customers
          FROM customers GROUP BY 1
        ) x),'[]'::jsonb),
        'inactive',jsonb_build_object('customers',(SELECT count(*)::int FROM customers WHERE last_order_at IS NOT NULL AND last_order_at < now()-interval '30 days')),
        'trend',coalesce((SELECT jsonb_agg(to_jsonb(x) ORDER BY x.month_start) FROM (
          SELECT date_trunc('month',ordered_at) month_start,
                 to_char(date_trunc('month',ordered_at),'Mon YYYY') month_label,
                 coalesce(sum(total),0) revenue,count(*)::int orders
          FROM orders GROUP BY 1
        ) x),'[]'::jsonb),
        'cities',coalesce((SELECT jsonb_agg(to_jsonb(x) ORDER BY x.revenue DESC) FROM (
          SELECT coalesce(city,'Unknown') city,count(*)::int customers,coalesce(sum(total_spend),0) revenue
          FROM customers GROUP BY 1 LIMIT 8
        ) x),'[]'::jsonb)
      ) data
    `);
    res.json(q.rows[0].data);
  }catch(e){
    console.error(e);
    res.status(500).json({error:e?.message||"Analysis failed."});
  }
}