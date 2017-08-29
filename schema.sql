DROP DATABASE IF EXISTS topCat;
CREATE DATABASE topCat;

USE topCat;
CREATE TABLE cats
(
	id INT NOT NULL auto_increment,
	picture VARCHAR(255),
    votes INT,
    rating INT,
    primary key (id)
    
);

SELECT * FROM cats;