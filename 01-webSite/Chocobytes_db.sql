drop database chocobytes;
create database chocobytes;
use chocobytes;
create table user(userid int auto_increment primary key,
	username varchar(30) not null,
    email varchar(50) not null,
    password varchar(30) not null,
    rank varchar(30) not null default 'Beginner'
    );

/*describe user;*/
create table web(id int auto_increment primary key,
	title varchar(200),
    content varchar(5000) not null
	);
/*describe web;*/
create table cpp(id int auto_increment primary key,
	title varchar(200),
    content varchar(5000) not null
	);
/*describe cpp;*/
create table csharp(id int auto_increment primary key,
	title varchar(200),
    content varchar(5000) not null
	);
/*describe csharp;*/
create table java(id int auto_increment primary key,
	title varchar(200),
    content varchar(5000) not null
	);
/*describe java;*/
create table algorithms(id int auto_increment primary key,
	title varchar(200),
    content varchar(5000) not null
	);
/*describe algorithms;*/