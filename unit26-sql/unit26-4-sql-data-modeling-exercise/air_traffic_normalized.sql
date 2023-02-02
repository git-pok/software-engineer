-- from the terminal run:
-- psql < air_traffic_normalized.sql

DROP DATABASE IF EXISTS air_traffic;

CREATE DATABASE air_traffic;

\c air_traffic

-- Flights
  -- ('Jennifer', 'Finch', '33B', '2018-04-08 09:00:00', '2018-04-08 12:00:00',
    -- 'United', 'Washington DC', 'United States', 'Seattle', 'United States'),
  -- ('Thadeus', 'Gathercoal', '8A', '2018-12-19 12:45:00', '2018-12-19 16:15:00',
    -- 'British Airways', 'Tokyo', 'Japan', 'London', 'United Kingdom'),
  -- ('Sonja', 'Pauley', '12F', '2018-01-02 07:00:00', '2018-01-02 08:03:00',
    -- 'Delta', 'Los Angeles', 'United States', 'Las Vegas', 'United States'),
  -- ('Jennifer', 'Finch', '20A', '2018-04-15 16:50:00', '2018-04-15 21:00:00',
    -- 'Delta', 'Seattle', 'United States', 'Mexico City', 'Mexico'),
  -- ('Waneta', 'Skeleton', '23D', '2018-08-01 18:30:00', '2018-08-01 21:50:00',
    -- 'TUI Fly Belgium', 'Paris', 'France', 'Casablanca', 'Morocco'),
  -- ('Thadeus', 'Gathercoal', '18C', '2018-10-31 01:15:00', '2018-10-31 12:55:00',
    -- 'Air China', 'Dubai', 'UAE', 'Beijing', 'China'),
  -- ('Berkie', 'Wycliff', '9E', '2019-02-06 06:00:00', '2019-02-06 07:47:00',
    -- 'United', 'New York', 'United States', 'Charlotte', 'United States'),
  -- ('Alvin', 'Leathes', '1A', '2018-12-22 14:42:00', '2018-12-22 15:56:00',
    -- 'American Airlines', 'Cedar Rapids', 'United States', 'Chicago', 'United States'),
  -- ('Berkie', 'Wycliff', '32B', '2019-02-06 16:28:00', '2019-02-06 19:18:00',
    -- 'American Airlines', 'Charlotte', 'United States', 'New Orleans', 'United States'),
  -- ('Cory', 'Squibbes', '10D', '2019-01-20 19:30:00', '2019-01-20 22:45:00',
    -- 'Avianca Brasil', 'Sao Paolo', 'Brazil', 'Santiago', 'Chile');

CREATE TABLE passengers (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL
);

INSERT INTO passengers (first_name, last_name)
  VALUES
    ('Jennifer', 'Finch'), ('Thadeus', 'Gathercoal'), ('Sonja', 'Pauley'),
    ('Waneta', 'Skeleton'), ('Thadeus', 'Gathercoal'), ('Berkie', 'Wycliff'),
    ('Alvin', 'Leathes'), ('Cory', 'Squibbes');

CREATE TABLE seats (
  id SERIAL PRIMARY KEY,
  seat TEXT NOT NULL
);

INSERT INTO seats (seat)
  VALUES
    ('33B'), ('8A'), ('12F'), ('20A'), ('23D'),
    ('18C'), ('9E'), ('1A'), ('32B'), ('10D');

CREATE TABLE flights (
  id SERIAL PRIMARY KEY,
  departure_time TIMESTAMP NOT NULL,
  arrival_time TIMESTAMP NOT NULL
);

INSERT INTO flights (departure_time, arrival_time)
  VALUES
    ('2018-04-08 09:00:00', '2018-04-08 12:00:00'), ('2018-12-19 12:45:00', '2018-12-19 16:15:00'),
    ('2018-01-02 07:00:00', '2018-01-02 08:03:00'), ('2018-04-15 16:50:00', '2018-04-15 21:00:00'),
    ('2018-08-01 18:30:00', '2018-08-01 21:50:00'), ('2018-10-31 01:15:00', '2018-10-31 12:55:00'),
    ('2019-02-06 06:00:00', '2019-02-06 07:47:00'), ('2018-12-22 14:42:00', '2018-12-22 15:56:00'),
    ('2019-02-06 16:28:00', '2019-02-06 19:18:00'), ('2019-01-20 19:30:00', '2019-01-20 22:45:00');

CREATE TABLE airlines (
  id SERIAL PRIMARY KEY,
  airline_name TEXT NOT NULL
);

INSERT INTO airlines (airline_name)
  VALUES
    ('United'), ('British Airways'), ('Delta'), ('TUI Fly Belgium'),
    ('Air China'), ('American Airlines'), ('Avianca Brasil');

CREATE TABLE cities (
  id SERIAL PRIMARY KEY,
  from_city TEXT NOT NULL,
  from_country TEXT NOT NULL,
  to_city TEXT NOT NULL,
  to_country TEXT NOT NULL
);

INSERT INTO cities (from_city, from_country, to_city, to_country)
  VALUES
    ('Washington DC', 'United States', 'Seattle', 'United States'),
    ('Tokyo', 'Japan', 'London', 'United Kingdom'),
    ('Los Angeles', 'United States', 'Las Vegas', 'United States'),
    ('Seattle', 'United States', 'Mexico City', 'Mexico'),
    ('Paris', 'France', 'Casablanca', 'Morocco'),
    ('Dubai', 'UAE', 'Beijing', 'China'),
    ('New York', 'United States', 'Charlotte', 'United States'),
    ('Cedar Rapids', 'United States', 'Chicago', 'United States'),
    ('Charlotte', 'United States', 'New Orleans', 'United States'),
    ('Sao Paolo', 'Brazil', 'Santiago', 'Chile');

CREATE TABLE tickets (
  id SERIAL PRIMARY KEY,
  passenger_id INTEGER NOT NULL REFERENCES passengers(id) ON DELETE CASCADE,
  seat_id INTEGER NOT NULL REFERENCES seats(id) ON DELETE CASCADE,
  flight_id INTEGER NOT NULL REFERENCES flights(id),
  airline_id INTEGER NOT NULL REFERENCES airlines(id),
  city_id INTEGER NOT NULL REFERENCES cities(id)
);

INSERT INTO tickets (passenger_id, seat_id, flight_id, airline_id, city_id)
  VALUES
    (1, 1, 1, 1, 1), (2, 2, 2, 2, 2), (3, 3, 3, 3, 3),
    (1, 4, 4, 3, 4), (4, 5, 5, 4, 5), (5, 6, 6, 5, 6),
    (6, 7, 7, 1, 7), (7, 8, 8, 6, 8), (6, 9, 9, 6, 9),
    (8, 10, 10, 7, 10);