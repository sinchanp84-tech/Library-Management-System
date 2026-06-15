import React, { useState } from "react";
import { FaBook, FaTrash, FaPlus, FaSearch } from "react-icons/fa";

function Dashboard() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Harry Potter",
      author: "J.K Rowling",
      price: 500,
    },
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [search, setSearch] = useState("");

  const addBook = () => {
    if (!title || !author || !price) {
      alert("Please fill all fields");
      return;
    }

    const newBook = {
      id: Date.now(),
      title,
      author,
      price,
    };

    setBooks([...books, newBook]);

    setTitle("");
    setAuthor("");
    setPrice("");
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-4">
      <div className="card shadow-lg border-0 p-4 mb-4">
        <h1 className="text-primary">
          <FaBook /> Library Management System
        </h1>
        <p className="text-muted">
          Manage your books professionally
        </p>
      </div>

      <div className="card shadow border-0 p-4 mb-4">
        <h3 className="mb-3">Add New Book</h3>

        <div className="row">
          <div className="col-md-4 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Book Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="col-md-4 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Author Name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div className="col-md-4 mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Book Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <button
          className="btn btn-primary"
          onClick={addBook}
        >
          <FaPlus /> Add Book
        </button>
      </div>

      <div className="card shadow border-0 p-4 mb-4">
        <h3 className="mb-3">
          <FaSearch /> Search Book
        </h3>

        <input
          type="text"
          className="form-control"
          placeholder="Search by Book Title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="row">
        {filteredBooks.map((book) => (
          <div className="col-md-4 mb-4" key={book.id}>
            <div
              className="card shadow border-0 h-100"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body">
                <h4 className="text-primary">
                  📚 {book.title}
                </h4>

                <p>
                  <strong>Author:</strong> {book.author}
                </p>

                <p>
                  <strong>Price:</strong> ₹{book.price}
                </p>

                <button
                  className="btn btn-danger"
                  onClick={() => deleteBook(book.id)}
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;