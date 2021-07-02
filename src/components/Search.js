import React , { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import PropTypes from "prop-types";
import Shelf from "./Shelf";

class Search extends Component {
	state = {
		booksearched: [],
		query:""
	}

	static propType = {
		onChangeShelf: PropTypes.func.isRequired
	}

	searchBook = inputSearchBook => {
    let query = inputSearchBook.trim()
    if (query) {
      BooksAPI.search(query, 20).then(booksearched => {
        if (booksearched.error) {
          this.setState({ booksearched: [] })
        }else {
          this.setState({ booksearched })
        }
      })
      this.setState({ query })
    }else {
      this.setState({ query: '', booksearched: [] })
    }
  }


	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link
							to="/"
							className="close-search"
					>Close</Link>
					<div className="search-books-input-wrapper">
						<input
								type="text"
								placeholder="Search by title or author"
								value={this.state.query}
								onChange={(event) => this.searchBook(event.target.value)}
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{this.state.booksearched.map(book => (
							<li>
								<Shelf
									bShelf={this.state.booksearched}
									onChangeShelf={this.props.onChangeShelf}
								/>
							</li>
						))}
					</ol>
				</div>
			</div>
		)
	}
}

export default Search