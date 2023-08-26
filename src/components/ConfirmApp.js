import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


export default function ConfirmApp(){

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

    const [confirm,setConfirm]=useState({
    location:"",
    date:"",
    time:""
    });

    const {id}=useParams();

    useEffect(() => {
    loadConfirm();
    }, []);

    const loadConfirm = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/booking/${id}`);
            setConfirm(response.data);
        } catch (error) {
            console.error("Error loading confirm data:", error);
        }
    };

    return (
        <div >
            <h1>Your Appoinment has been booked!!!</h1>

            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <b>Location : </b>
                    {confirm.location}
                </li>
                <li className="list-group-item">
                    <b>Date : </b>
                    {confirm.date}
                </li>
                <li className="list-group-item">
                    <b>Time : </b>
                    {confirm.time}
                </li>
            </ul>
            <Link className="btn btn-danger mx-2" to={"/donor"}>Back To Home</Link>
            </div>
    )
}




