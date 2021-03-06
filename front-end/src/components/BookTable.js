import React from "react";
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import "../css/table.css";
import Edit from "../components/Edit";
import Delete from "../components/Delete";
import AddBook from "../components/AddBook";

const BookTable = () => {
    const [books, setBook] = useState([]);
    useEffect(() => {
        fetch("http://18.140.66.242:3002/books", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setBook(res.data)
            })
    }, []);

    return (
        <>
            <div className="table-list">
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Authors</th>
                            <th>ISBN</th>
                            <th>Published On</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((data, i) =>
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{data.name}</td>
                                <td>{data.price}</td>
                                <td>{data.author}</td>
                                <td>{data.isbn}</td>
                                <td>{data.publishdate.slice(0, 10)}</td>
                                <td><Edit book={data} /></td>
                                <td><Delete books={data._id} /></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
            <AddBook book={books} />
        </>
    )
}

export default BookTable;