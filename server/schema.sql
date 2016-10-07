CREATE DATABASE chat;

USE chat;



/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id int NOT NULL,
  username text,
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id int NOT NULL,
  roomname text,
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id int NOT NULL,
  message text,
  uid int NOT NULL,
  rid int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (uid) REFERENCES users(id),
  FOREIGN KEY (rid) REFERENCES rooms(id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

