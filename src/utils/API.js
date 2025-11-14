import axios from "axios";

const baseUrl = "http://localhost:8081";

export default {

  // Gets all books
  getBooks: function () {
    return axios.get(baseUrl + "/api/books");
  },
  getSavedBooks: function () {
    return axios.get(baseUrl + "/api/books/saved")
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get(baseUrl + "/api/books/saved" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete(baseUrl + "/api/books/saved/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post(baseUrl + "/api/books/saved", bookData);
  }
};