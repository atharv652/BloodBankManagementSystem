import React from "react";
import { Link } from "react-router-dom";

export default function Payments() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    return (
        <div className="container">
            <table>
                <tr>
                    <h1>Payment Successful</h1><br />
                </tr>
                <tr>
                   <h3>You will Receive Blood Shortly</h3> 
                </tr>
                <tr>
                    <td>Purchase Date: {formattedDate}</td>
                </tr>
                <tr>
                    <td>Purchase Time: {formattedTime}</td>
                </tr>
                <tr>
                    <td>
                        <Link to={"/buy"} className="btn btn-danger mx-2">
                            Go back to the purchase window
                        </Link>
                    </td>
                </tr>
            </table>
        </div>
    );
}
