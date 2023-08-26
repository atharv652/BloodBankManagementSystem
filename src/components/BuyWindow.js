import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function BuyWindow() {
    const tableStyle = {
        borderCollapse: 'collapse',
        width: '100%',
        border: '1px solid black',
        marginTop: '20px',
    };

    const cellStyle = {
        border: '1px solid black',
        padding: '8px',
        textAlign: 'center',
    };

    const buttonStyle = {
        border: '1px solid black',
        padding: '5px 10px',
        backgroundColor: 'lightblue',
        cursor: 'pointer',
    };

    
    const [buy, setBuy] = useState({
        blood_grp: "",
        qty: "",
        desc: "",
        price :""
    });

    const { id } = useParams();

    useEffect(() => {
        loadBuy();
    }, []);

    const loadBuy = async () => {
        try {
            
            const response = await axios.get(`http://localhost:8080/item/${id}`);
            // alert("aa")
            setBuy(response.data);
        } catch (error) {
            console.error("Error loading data:", error);
        }
    };
    

    return (
        <div>
            <h1>Blood Coming Your Way to Save Lives!</h1>
            
            <ul className="list-group list-group-flush">            
                <li className="list-group-item">                   
                    <b>Blood Group : </b>
                    {buy.blood_grp}
                    
                </li>
                <li className="list-group-item">
                    <b>Quantity : </b>
                    {/* {buy.qty} */}
                    1
                </li>
                <li className="list-group-item">
                    <b>Description : </b>
                    {buy.desc}
                </li>
                <li className="list-group-item">
                    <b>Price : </b>
                    {buy.price}
                </li>
            </ul>
            <Link className="btn btn-danger mx-2" to="/buy">
                Back To Home
            </Link>
            <Link className="btn btn-outline-primary mx-2" to="/payments">
                Make Payment
            </Link>
        </div>
    );
}