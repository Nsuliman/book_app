DROP TABLE IF EXISTS booksql;
CREATE TABLE booksql  (
  id SERIAL PRIMARY KEY,
image_url VARCHAR(255),
  title VARCHAR(255),
  author VARCHAR(255),
    booktype VARCHAR(255),
  descrp TEXT,
);

INSERT INTO booksql (title, author, image_url, descrp, booktype)
VALUES('My Father','Nawal','image','Lovely dad','1961');