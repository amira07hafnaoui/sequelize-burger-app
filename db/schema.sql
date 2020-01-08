DROP DATABASE IF EXISTS burgers_database;
CREATE DATABASE burgers_database;

USE burgers_database;

CREATE TABLE burgers (
    id INTEGER NOT NULL AUTO_INCREMENT,
   burger_name VARCHAR(30) NOT NULL ,
    devoured BOOLEAN DEFAULT false NOT NULL,
    createdAt DATETIME DEFAULT now() NOT NULL,
    updatedAt DATETIME DEFAULT now() NOT NULL,
    PRIMARY KEY(id)
)
