import React, { Component } from "react";
import PropTypes from "prop-types";
import BookItem from "./BookItem"

class Shelf extends Component {
  static propTypes = {
    bShelf: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
		title: PropTypes.string.isRequired
  }
  render() {
    return (
			<div>
				<h2 className="bookshelf-title">{this.props.title}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{this.props.bShelf.map(book => (
							<BookItem
								key={book.id}
								bookId={book.id} 
								onChangeShelf={this.props.onChangeShelf} />
						))}
					</ol>
				</div>
			</div>
    )
  }
}

export default Shelf