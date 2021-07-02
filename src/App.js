import React , {Component} from "react";
import * as BooksAPI from "./BooksAPI";
import { Route, Link } from "react-router-dom";
import Search from "./components/Search";
import BookList from "./components/BookList";
import "./App.css";


class BooksApp extends Component {
  state = {
    books: []
  };

  //To get all data from booksAPI
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
          books: books
      });
    })
  }

  //To Move books between shelfs
  changeBShelf = (book, newShelf) => {
    book.props.book.shelf = newShelf;
    this.setState( (state) => ({
      books: state.books.filter( (e) => e.id !== book.props.book.id).concat([book.props.book])
    }))
    BooksAPI.update(book.props.book, newShelf);
  }


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BookList
              books={this.state.books}
              onChangeShelf={this.changeBShelf}
            />
            <div className="open-search">
              <Link
                to="/search"
              >Add a book</Link>
            </div>
          </div>
        )}
        />

        <Route path="/search" render={() => (
          <Search
            searchBooks={this.state.books}
            onChangeShelf={this.changeBShelf}
          />
        )}
        />

      </div>
    )
  }
}

export default BooksApp