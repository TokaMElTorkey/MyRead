import React , { Component } from "react";
import PropTypes from "prop-types";
import Shelf from "./Shelf";

class BookList extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired,
		onChangeShelf: PropTypes.func.isRequired
	}


	render() {
		const currentlyReading = this.props.books.filter( book => (book.shelf === 'currentlyReading') )
		const wantToRead = this.props.books.filter( book => (book.shelf === 'wantToRead') )
		const read = this.props.books.filter( book => (book.shelf === 'read') )
	
		return (
			<div className="list-books-content">
				<div>
					<Shelf
						title="Currently Reading"
						bShelf={currentlyReading} 
						key="currentltyReading"
						onChangeShelf={this.props.onChangeShelf}
					/>
					<Shelf
						title="Want to Read"
						bShelf={wantToRead} 
						key="wantToRead"
						onChangeShelf={this.props.onChangeShelf}
					/>
					<Shelf
						title="Read"
						bShelf={read} 
						key="read"
						onChangeShelf={this.props.onChangeShelf}
					/>
				</div>
			</div>
		)
	}
}

export default BookList
