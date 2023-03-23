\c biztime_test

DROP TABLE IF EXISTS invoices;
DROP TABLE IF EXISTS companies;
DROP TABLE IF EXISTS industries;
DROP TABLE IF EXISTS companies_industries;

CREATE TABLE companies (
    code text PRIMARY KEY,
    name text NOT NULL UNIQUE,
    description text
);

CREATE TABLE invoices (
    id serial PRIMARY KEY,
    comp_code text NOT NULL REFERENCES companies ON DELETE CASCADE,
    amt float NOT NULL,
    paid boolean DEFAULT false NOT NULL,
    add_date date DEFAULT CURRENT_DATE NOT NULL,
    paid_date date,
    CONSTRAINT invoices_amt_check CHECK ((amt > (0)::double precision))
);

CREATE TABLE industries (
    id SERIAL PRIMARY KEY,
    code TEXT NOT NULL UNIQUE,
    industry TEXT NOT NULL
);

CREATE TABLE companies_industries (
    id SERIAL PRIMARY KEY,
    company_code TEXT NOT NULL REFERENCES companies(code) ON DELETE CASCADE,
    industry_code TEXT REFERENCES industries(code) ON DELETE CASCADE 
);
