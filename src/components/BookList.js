import React , { Component } from "react";
import PropTypes from "prop-types";
import Shelf from "./Shelf";

class BookList extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired,
		onChangeShelf: PropTypes.func.isRequired
	}

	handleBookShelf = (book, shelf) => {
		this.props.onChangeShelf(book, shelf);
	}

	render() {
		return (
			<div className="list-books-content">
				<div>
					<Shelf
						title="Currently Reading"
						case="currentlyReading"
						books={this.props.books.filter(b => b.shelf === 'currentlyReading')}
						onChangeShelf={this.handleBookShelf}
					/>
					<Shelf
						title="Want to Read"
						case="wantToRead"
						books={this.props.books.filter(b => b.shelf === 'wantToRead')}
						onChangeShelf={this.handleBookShelf}
					/>
					<Shelf
						title="Read"
						case="read"
						books={this.props.books.filter(b => b.shelf === 'read')}
						onChangeShelf={this.handleBookShelf}
					/>
				</div>
			</div>
		)
	}
}

export default BookList