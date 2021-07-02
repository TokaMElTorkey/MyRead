import React , { Component } from "react";
import PropTypes from "prop-types";

class BookItem extends Component {

	static propTypes = {
		book: PropTypes.object.isRequired,
		bChangeShelf: PropTypes.func.isRequired
	}

	//To handle change shelf know old and change to the new
	handleChangeShelf = (e) => {
		let newShelf = e.target.value;
		this.props.bChangeShelf(this, newShelf)
	}

	render() {
		//To know the book author
		if(this.props.book.authors !== undefined && Array.isArray(this.props.book.authors) && this.props.book.authors.length > 1) {
				this.props.book.authors = this.props.book.authors.join(' and ');
		} else if (this.props.book.authors !== undefined && Array.isArray(this.props.book.authors)) {
				this.props.book.authors = this.props.book.authors[0];
		} else if(this.props.book.authors === undefined) {
				this.props.book.authors = '';
		}

		if(this.props.book.shelf === undefined) {
				this.props.book.shelf = 'none';
		}


		return (
			<div className="book">
				<div className="book-top">
					<div className="book-cover">
						<img alt="" src={this.props.book.imageLinks.thumbnail} />
					</div>
					<div className="book-shelf-changer">
						<select onChange={this.handleChangeShelf} defaultValue={this.props.book.shelf}>
								<option value="none" disabled>Move to...</option>
								<option value="currentlyReading" >Currently Reading</option>
								<option value="wantToRead" >Want to Read</option>
								<option value="read" >Read</option>
								<option value="none" >None</option>
						</select>
					</div>
				</div>
				<div className="book-title">{this.props.book.book}</div>
				<div className="book-authors">{this.props.book.authors}</div>
			</div>
		)
	}
}


export default BookItem