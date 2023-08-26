import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Buy() {
    const styles = {
        container: {
            textAlign: 'center',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            maxWidth: '800px',
            margin: '0 auto',
        },
        heading: {
            fontSize: '24px',
            marginBottom: '10px',
        },
        subHeading: {
            fontSize: '20px',
            marginBottom: '20px',
        },
        table: {
            borderCollapse: 'collapse',
            width: '100%',
            border: '1px solid black',
            marginTop: '20px',
        },
        cell: {
            border: '1px solid black',
            padding: '8px',
            textAlign: 'center',
        },
    };

    const [buy, setBuy] = useState([]);

    useEffect(() => {
        loadBuy();
    }, []);

    const loadBuy = async () => {
        const result = await axios.get("http://localhost:8080/buy");
        // alert("IN buy")

        setBuy(result.data);
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Welcome</h1>
            <h2 style={styles.subHeading}>Buying Window</h2>
            <table style={styles.table} className="table border shadow"> 
                <thead>
                    <tr>
                        <th scope="col">Blood Group</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {buy.map((item, index) => (
                        <tr key={item.sid}>
                            <td style={styles.cell}>{item.blood_grp}</td>
                            <td style={styles.cell}>{item.qty}</td>
                            <td style={styles.cell}>{item.desc}</td>
                            <td style={styles.cell}>{item.price}</td>
                            <td style={styles.cell}>
                            <Link to={`/buywindow/${item.sid}`} className="btn btn-outline-primary mx-2">
                            Buy
                            </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="logout" className='nav-link btn btn-outline-danger px-3'>Logout</Link>
        </div>
    );
}