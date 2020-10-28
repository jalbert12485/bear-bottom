CREATE DATABASE products_db;

USE products_db;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NULL,
  price VARCHAR(100) NULL,
  shortDesc VARCHAR(100) NULL,
  longDesc VARCHAR(1000) NULL,
  imageSrc VARCHAR(100) NULL,
  imageAlt VARCHAR(100) NULL,
  inventory VARCHAR(100) NULL,
  category VARCHAR(100) NULL,
  dimensions VARCHAR(100) NULL,
  size VARCHAR(100) NULL,
  style VARCHAR(100) NULL,
  print VARCHAR(100) NULL,
  PRIMARY KEY (id)
);

