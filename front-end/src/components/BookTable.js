import Table from 'react-bootstrap/Table';
import "../css/table.css";
import React from "react";

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
                setBook(res.data)
            })
    }, []);

    return (
        <div className="table-list">
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Code</th>
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
                            <td>{data.pubdate.slice(0, 10)}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default BookTable;