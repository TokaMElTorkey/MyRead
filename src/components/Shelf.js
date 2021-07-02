import React from "react";
import PropTypes from "prop-types";
import BookItem from "./BookItem"

const Shelf = function (props) {
	let handleBookShelf = (book, shelf) => {
		props.onChangeShelf(book, shelf);
	}

	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{props.title}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{props.books.map((book) => (
						<li key={book.id}>
							<BookItem
								book={book}
								bChangeShelf={handleBookShelf}
							/>
						</li>
					))}
				</ol>
			</div>
		</div>
	)
}

Shelf.propTypes = {
	books: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired
}
export default Shelf