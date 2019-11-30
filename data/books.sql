DROP TABLE IF EXISTS booksql;
CREATE TABLE booksql  (
  id SERIAL PRIMARY KEY,
image_url VARCHAR(255),
  title VARCHAR(255),
  author VARCHAR(255),
    booktype VARCHAR(255),
  descrp TEXT,
  bookshelf VARCHAR(255)

);

INSERT INTO booksql (image_url,title, author, booktype, descrp, bookshelf)
VALUES('My Father','Nawal','image','Lovely dad','1961','fantasy');