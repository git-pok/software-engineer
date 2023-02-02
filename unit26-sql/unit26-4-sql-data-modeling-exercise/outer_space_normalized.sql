-- from the terminal run:
-- psql < outer_space_normalized.sql

DROP DATABASE IF EXISTS outer_space;

CREATE DATABASE outer_space;

\c outer_space

CREATE TABLE planets (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  galaxy TEXT NOT NULL
);

INSERT INTO planets (name, galaxy)
  VALUES
    ('Earth', 'Milky Way'),
    ('Mars', 'Milky Way'),
    ('Venus', 'Milky Way'),
    ('Neptune', 'Milky Way'),
    ('Proxima Centauri b', 'Milky Way'),
    ('Gliese 876 b', 'Milky Way');

CREATE TABLE moons (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

INSERT INTO moons (name)
  VALUES ('The Moon'), ('Phobos'), ('Deimos'), ('Naiad'),
    ('Thalassa'), ('Despina'), ('Galatea'), ('Larissa'),
    ('S/2004 N 1'), ('Proteus'), ('Triton'), ('Nereid'),
    ('Halimede'), ('Sao'), ('Laomedeia'), ('Psamathe'),
    ('Neso');

CREATE TABLE orbits (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

INSERT INTO orbits (name)
  VALUES ('The Sun'),
    ('Proxima Centauri'),
    ('Gliese 876');

CREATE TABLE planet_moons (
  id SERIAL PRIMARY KEY,
  planet_id INTEGER NOT NULL REFERENCES planets(id) ON DELETE CASCADE,
  moon_id INTEGER REFERENCES moons(id)
);

INSERT INTO planet_moons (planet_id, moon_id)
  VALUES (1, 1),
    (2, 2), (2, 3), (3, NULL), (4, 4), (4, 5), (4, 6), (4, 7),
    (4, 8), (4, 9), (4, 10), (4, 11), (4, 12), (4, 13),
    (4, 14), (4, 15), (4, 16), (4, 17), (5, NULL), (6, NULL);

CREATE TABLE planet_orbits (
  id SERIAL PRIMARY KEY,
  planet_id INTEGER NOT NULL REFERENCES planets(id) ON DELETE CASCADE,
  orbit_id INTEGER REFERENCES orbits(id),
  orbital_period_in_years FLOAT NOT NULL
);

INSERT INTO planet_orbits (planet_id, orbit_id, orbital_period_in_years)
  VALUES (1, 1, 1.00), (2, 1, 1.88), (3, 1, 0.62),
    (4, 1, 164.8), (5, 2, 0.03), (6, 3, 0.23);