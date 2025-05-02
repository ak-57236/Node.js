
// books, booksname, bookprise, bookauthor, bookdescription
const { DataTypes } = require('sequelize');

const bookModel = (sequelize ) => {
  const book = sequelize.define("book", {
    bookId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    bookName: {
      type: DataTypes.STRING,
    },
    bookAuthor: {
      type: DataTypes.STRING,
    },
  });
  return book;
};

module.exports = bookModel;