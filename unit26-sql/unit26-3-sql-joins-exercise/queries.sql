-- write your queries here
--1
SELECT * FROM owners o FULL JOIN vehicles v ON o.id = v.owner_id;

--2
SELECT o.first_name, o.last_name, COUNT(v.owner_id) AS total_cars FROM vehicles v
    JOIN owners o ON v.owner_id = o.id GROUP BY o.first_name, o.last_name
        ORDER BY o.first_name;

--3
SELECT o.first_name, o.last_name, ROUND(AVG(v.price)) AS avg_car_price, COUNT(v.owner_id) AS total_cars
    FROM vehicles v JOIN owners o ON v.owner_id = o.id
        GROUP BY o.first_name, o.last_name
            HAVING AVG(v.price) > 10000 AND COUNT(v.owner_id) > 1
                ORDER BY o.first_name DESC;