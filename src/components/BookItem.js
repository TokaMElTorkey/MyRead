import React , { Component } from "react";
import PropTypes from "prop-types";
import * as BooksAPI from '../BooksAPI'


class BookItem extends Component {

	state = {
    newBook: []
  }
	//To get all book data and set in book array
	componentDidMount(){
    BooksAPI.get(this.props.bookId)
		.then(newBook => {
      this.setState({ newBook })
    })
  }

	static propTypes = {
		bookId: PropTypes.string.isRequired,
		onChangeShelf: PropTypes.func.isRequired
	}




	render() {
		return (
			<li>
			<div className="book">
        <div className="book-top">
          {this.state.newBook.imageLinks && (
            <div className="book-cover"
						style={{ backgroundImage: `url(${this.state.newBook.imageLinks.thumbnail})` }}
						>
								<img alt="" src={this.state.newBook.imageLinks.thumbnail} />
						</div>
          )}
					<div className="book-shelf-changer ">
						<select 
							onChange={event => this.props.onChangeShelf(this.state.newBook, event.target.value)} 
							value={this.state.newBook.shelf}
						>
							<option value="none" disabled>Move to...</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
          </div>
          <div className="book-title">{this.state.newBook.title}</div>
          <div className="book-authors">
            {this.state.newBook.authors ? this.state.newBook.authors : null}
          </div>
        </div>
				</li>
		)
	}
}


export default BookItem



