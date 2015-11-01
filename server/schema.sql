CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  MID int,
  time date,
  room varchar(50),
  user varchar(30),
  message varchar(140)
);

CREATE TABLE users (
  UID int,
  user varchar(30)
);