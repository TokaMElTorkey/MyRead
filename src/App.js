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
  async componentDidMount(){
    const books = await BooksAPI.getAll();
    this.setState({books})
  }

  //To Move books between shelfs
  changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then((responde) => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    })
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
              onChangeShelf={this.changeBookShelf}
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
            onChangeShelf={this.changeBookShelf}
          />
        )}
        />

      </div>
    )
  }
}

export default BooksApp
