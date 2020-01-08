
USE burgers_database;

INSERT INTO burgers (hamberder_name, devoured, createdAt, updatedAt)
VALUES ("Chicken burger ", false, now(), now());

INSERT INTO burgers (hamberder_name, devoured, createdAt, updatedAt)
VALUES ("  Cheese  burger", false, now(), now());

INSERT INTO burgers (hamberder_name, devoured, createdAt, updatedAt)
VALUES ("burger veggies", true, now(), now());