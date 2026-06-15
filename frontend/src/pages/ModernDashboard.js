import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import harry from "../images/harry.jpg";
import alchemist from "../images/alchemist.jpg";
import history from "../images/history.jpg";
import javaBook from "../images/java.jpg";
import physics from "../images/physics.jpg";
import pythonBook from "../images/python.jpg";

function ModernDashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const [books, setBooks] = useState([
    {
      title: "Harry Potter",
      author: "J.K Rowling",
      price: 500,
      image: harry,
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: 350,
      image: alchemist,
    },
    {
      title: "World War II",
      author: "Winston Churchill",
      price: 650,
      image: history,
    },
    {
      title: "Java Programming",
      author: "Herbert Schildt",
      price: 900,
      image: javaBook,
    },
    {
      title: "Physics Basics",
      author: "H.C Verma",
      price: 700,
      image: physics,
    },
    {
      title: "Python Programming",
      author: "Mark Reed",
      price: 750,
      image: pythonBook,
    },
  ]);

  const [search, setSearch] = useState("");

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  const deleteBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  const addBook = () => {
    if (!title || !author || !price) {
      alert("Please fill all fields");
      return;
    }

    const newBook = {
      title,
      author,
      price,
      image: pythonBook,
    };

    setBooks([...books, newBook]);

    setTitle("");
    setAuthor("");
    setPrice("");
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#eef2ff",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "240px",
          background: "#0f172a",
          color: "white",
          padding: "25px",
        }}
      >
        <h2>📚 Library</h2>

        <div style={{ marginTop: "40px", lineHeight: "3" }}>
          <div
            onClick={() => window.scrollTo(0, 0)}
            style={{ cursor: "pointer" }}
          >
            🏠 Dashboard
          </div>

          <div
            onClick={() =>
              document
                .getElementById("books-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{ cursor: "pointer" }}
          >
            📚 Books
          </div>

          <div
            onClick={() =>
              document
                .getElementById("add-book-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{ cursor: "pointer" }}
          >
            ➕ Add Book
          </div>

          <div
            onClick={logout}
            style={{
              cursor: "pointer",
              color: "#ff6b6b",
              fontWeight: "bold",
            }}
          >
            🚪 Logout
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h1>Library Management Dashboard</h1>
            <p style={{ color: "gray" }}>
              Welcome Back, Admin
            </p>
          </div>

          <div
            style={{
              background: "white",
              padding: "12px 20px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            👤 Sinchana
          </div>
        </div>

        {/* Statistics */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "25px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "#2563eb",
              color: "white",
              padding: "20px",
              borderRadius: "15px",
              width: "220px",
            }}
          >
            <h3>Total Books</h3>
            <h2>{books.length}</h2>
          </div>

          <div
            style={{
              background: "#f97316",
              color: "white",
              padding: "20px",
              borderRadius: "15px",
              width: "220px",
            }}
          >
            <h3>Issued Books</h3>
            <h2>45</h2>
          </div>

          <div
            style={{
              background: "#10b981",
              color: "white",
              padding: "20px",
              borderRadius: "15px",
              width: "220px",
            }}
          >
            <h3>Fine Collected</h3>
            <h2>₹2500</h2>
          </div>
        </div>

        {/* Add Book */}
        <div
          id="add-book-section"
          style={{
            marginTop: "30px",
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>➕ Add New Book</h2>

          <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              padding: "10px",
              marginRight: "10px",
              marginTop: "10px",
            }}
          />

          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            style={{
              padding: "10px",
              marginRight: "10px",
              marginTop: "10px",
            }}
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{
              padding: "10px",
              marginRight: "10px",
              marginTop: "10px",
            }}
          />

          <button
            onClick={addBook}
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Add Book
          </button>
        </div>

        {/* Search */}
        <div style={{ marginTop: "30px" }}>
          <input
            type="text"
            placeholder="🔍 Search Books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "500px",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              fontSize: "15px",
              background: "white",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          />
        </div>

        <h2
          id="books-section"
          style={{ marginTop: "35px" }}
        >
          Books Collection
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill,minmax(260px,1fr))",
            gap: "25px",
            marginTop: "20px",
          }}
        >
          {filteredBooks.map((book, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow:
                  "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={book.image}
                alt={book.title}
                style={{
                  width: "100%",
                  height: "320px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "15px" }}>
                <h3>{book.title}</h3>

                <p>
                  <strong>Author:</strong> {book.author}
                </p>

                <p>
                  <strong>Price:</strong> ₹{book.price}
                </p>

                <button
                  onClick={() => deleteBook(index)}
                  style={{
                    background: "#ef4444",
                    color: "white",
                    border: "none",
                    padding: "10px 15px",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ModernDashboard;