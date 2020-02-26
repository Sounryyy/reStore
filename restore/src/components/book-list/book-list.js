import React, { Component } from "react";
import { connect } from "react-redux";

import BookListItem from "../book-list-item";
import { booksLoaded } from "../../actions";
import withBookstoreService from "../hoc"
import './book-list.css';
import compose from "../../utils/compose";

class BookList extends Component {

    componentDidMount() {
        const { bookstoreService, booksLoaded } = this.props;

        const data = bookstoreService.getBooks().then(data => booksLoaded(data));

    }

    render() {
        const { books, loading } = this.props;
        console.log(loading);
        if (loading) {
            return <div>Loading</div>
        }

        return (
            <ul>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem book={book} /></li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({ books, loading }) => {
    return { books, loading }
};

const mapDispatchToProps = {
    booksLoaded
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList)