-- Comments in SQL Start with dash-dash
--1
SELECT * FROM analytics WHERE id = 1800;

--2
SELECT * FROM analytics WHERE last_updated = '2018-08-01';

--3
SELECT category, COUNT(category) FROM analytics GROUP BY category;

--4
SELECT app_name, category, reviews FROM analytics ORDER BY reviews DESC LIMIT 5;

--5
SELECT app_name, category, rating, reviews FROM analytics
    WHERE rating >= 4.8 ORDER BY reviews DESC;

--6
SELECT category, AVG(rating) AS avg FROM analytics GROUP BY category ORDER BY avg DESC;

--7
SELECT app_name, price, rating FROM analytics WHERE rating < 3 ORDER BY price DESC;

--8
SELECT app_name, min_installs, rating FROM analytics
    WHERE min_installs <= 50 AND rating > 0 ORDER BY rating DESC;

--9
SELECT app_name, rating, reviews FROM analytics WHERE rating < 3 AND reviews >= 10000;

--10
SELECT app_name, reviews, price FROM analytics
    WHERE price BETWEEN 0.10 AND 1.00 ORDER BY reviews DESC LIMIT 10;

--11
SELECT app_name, MIN(last_updated) AS outdated FROM analytics
    GROUP BY app_name ORDER BY outdated LIMIT 1;

--12
SELECT app_name, price AS highest_price FROM analytics ORDER BY highest_price DESC LIMIT 1;

--13
SELECT COUNT(reviews) as total_reviews FROM analytics;

--14
SELECT COUNT(app_name) as apps, category FROM analytics
    GROUP BY category HAVING COUNT(app_name) > 300;

--15
SELECT app_name, reviews, min_installs, min_installs / reviews AS proportion
    FROM analytics WHERE min_installs >= 100000 ORDER BY proportion DESC LIMIT 1;