### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,burgers_db
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

select * from burgers;