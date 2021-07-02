import React, { Component } from "react";
import PropTypes from "prop-types";
import BookItem from "./BookItem"

class Shelf extends Component {
  static propTypes = {
    bShelf: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
  }
  render() {
    return (
			<div>
				<h2 className="bookshelf-title">{this.props.title}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{this.props.bShelf.map((book) => (
							<li key={book.id}>
								<BookItem
									key={book.id}
									bookId={book.id} 
									onChangeShelf={this.props.onChangeShelf} />
							</li>
						))}
					</ol>
				</div>
			</div>
    )
  }
}

export default Shelf