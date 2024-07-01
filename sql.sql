ข้อ 5
SELECT products.product_name,sum(order_details.quantity) AS totoQuantity
FROM products
left join order_details on order_details.product_id = products.product_id
JOIN orders  ON order_details.order_id = orders.order_id
WHERE YEAR(orders.order_date) = 2016
GROUP BY products.product_name
ORDER BY totoQuantity DESC
LIMIT 5;

ข้อ 6
-- สินค้า 5 อันดับแรกในปี 2016
WITH top_products_2016 AS (
    SELECT products.product_name,sum(order_details.quantity) AS totoQuantity
    FROM products
    left join order_details on order_details.product_id = products.product_id
    JOIN orders  ON order_details.order_id = orders.order_id
    WHERE YEAR(orders.order_date) = 2016
    GROUP BY products.product_name
    ORDER BY totoQuantity DESC
    LIMIT 5
),

-- สินค้า 5 อันดับแรกในปี 2017
top_products_2017 AS (
    SELECT products.product_name,sum(order_details.quantity) AS totoQuantity
    FROM products
    left join order_details on order_details.product_id = products.product_id
    JOIN orders  ON order_details.order_id = orders.order_id
    WHERE YEAR(orders.order_date) = 2017
    GROUP BY products.product_name
    ORDER BY totoQuantity DESC
    LIMIT 5
)
-- หาสินค้าที่ติดอันดับขายดีในทั้งสองปี
SELECT top_products_2016.product_name
FROM top_products_2016
INNER JOIN top_products_2017 ON top_products_2016.product_name = top_products_2017.product_name;


ข้อ 7

SELECT 
    YEAR(o.order_date) AS year, 
    SUM(p.unit_price * od.quantity * (1 - od.discount)) AS total_sales
FROM 
    orders o
left JOIN 
    order_details od ON o.order_id = od.order_id
left JOIN 
    customers c ON o.customer_id = c.customer_id
left join 
	products p on od.product_id = p.product_id
WHERE 
    c.region = 'Western Europe'
GROUP BY 
    YEAR(o.order_date)
ORDER BY 
    year;
