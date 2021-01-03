CREATE DATABASE movielist;

USE movielist;

CREATE TABLE movies (
    id              INT             PRIMARY KEY,
    title           VARCHAR (40),
    display         BOOLEAN,
    watched         BOOLEAN,
    overview        VARCHAR (2000),
    vote_average    INT,
    release_date    VARCHAR(40),
    poster_path     VARCHAR(100)
);