-- create a database
create database employee;

-- creating the columns
use  employee;

create table employee(
    employee_id int,
    first_name varchar(30),
    last_name varchar(30),
    hourly_pay decimal(4,2),
    hire_date date
);


