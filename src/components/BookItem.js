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