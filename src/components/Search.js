import React , { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import PropTypes from "prop-types";
import BookItem from "./BookItem";

class Search extends Component {
	state = {
		bQuery: []
	}

	static propType = {
		searchBooks: PropTypes.array.isRequired,
		onChangeShelf: PropTypes.func.isRequired
	}

	//Filteration
	section = (x, y) => {
		let z;
		if (y.length > x.length) {
			z = y;
			y = x;
			x = z;
		}
		return x.filter(function (e) {
			return y.indexOf(e) > -1;
		});
	}

	updateQuery = (query) => {
		if(query === '') {
			this.setState({
				bQuery: []
			})
		return
		}

		BooksAPI.search(query, 20).then((books) => {
			this.updateBookState(books);
				if (books !== undefined && books.error !== "Query is empty") {
					this.setState({
						bQuery: books
					})
				} else {
				this.setState({
					bQuery: []
				})
			}
		})
	}

	//Update book shelf 
	updateBookState = (books) => {
		if(books !== undefined && books.error !== "Query is empty") {
			let bookIds = books.map(book => book.id);
			let currentlyReadingSection = this.section(bookIds, this.props.searchBooks.filter((cr) => cr.shelf === 'currentlyReading').map(b => b.id));
			let readSection = this.section(bookIds, this.props.searchBooks.filter(r => r.shelf === 'read').map((b) => b.id));
			let wantToReadSection = this.section(bookIds, this.props.searchBooks.filter((wr) => wr.shelf === 'wantToRead').map((b) => b.id));

			for (let i = 0; i < books.length; i++) {
				if (currentlyReadingSection.includes(books[i].id)) {
						books[i].shelf = 'currentlyReading';
				}
				if (readSection.includes(books[i].id)) {
						books[i].shelf = 'read';
				}
				if (wantToReadSection.includes(books[i].id)) {
						books[i].shelf = 'wantToRead';
				}
			}
		}
	}

	//Clear query 
	clearQuery = () => {
		this.setState({
			query: '',
			bQuery: []
		})
	}

	handleBookShelf = (book, shelf) => {
		this.props.onChangeShelf(book, shelf);
	}

	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link
							to="/"
							className="close-search"
							onClick={this.clearQuery}
					>Close</Link>
					<div className="search-books-input-wrapper">
						<input
								type="text"
								placeholder="Search by title or author"
								onChange={(event) => this.updateQuery(event.target.value)}
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{this.state.bQuery.map(book => (
							<li key={book.id}>
								<BookItem
									book={book}
									bChangeShelf={this.handleBookShelf}
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