CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  MID int,
  time date,
  room varchar(50),
  UID int,
  message varchar(140)
);

CREATE TABLE users (
  UID int,
  user varchar(30)
);