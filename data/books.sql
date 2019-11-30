DROP TABLE IF EXISTS booksTab;
CREATE TABLE booksTab (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  description TEXT,
  booktype VARCHAR(255),
  bookshelf VARCHAR(255),
);