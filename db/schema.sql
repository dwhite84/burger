DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;


/* Create a table for all your star wars characters */
CREATE TABLE burgers (
	id Int( 11 ) AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR( 30) NOT NULL,
	devoured BOOLEAN NOT NULL,
	
	/* Set ID as primary key */
	PRIMARY KEY ( id )
);