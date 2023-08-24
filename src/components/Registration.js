import React, { useState } from 'react';
import './Login.css';

export default function Registration() {
    const [fullname, setFullname] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [contact, setContact] = useState("");

    const handleRegistration = async (e) => {
        e.preventDefault();
        const register = { fullname, address, city, pincode, username, password, contact };

        try {
            const response = await fetch("http://localhost:8080/register1/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(register), // Use JSON.stringify
            });

            if (response.ok) {
                console.log("Successfully Registered");
            } else {
                console.error("Registration failed");
            }
        } catch (error) {
            console.error('Network error', error);
        }
    };
    

    return (
        <div className="container">
            <form className="registration-form">
                <h2>User Registration</h2>
                <label>Name:</label>
                <input
                    type="text"
                    value={fullname} onChange={(e) => setFullname(e.target.value) }
                    
                />
                <label>Address:</label>
                <input
                    value={address} onChange={(e) => setAddress(e.target.value) }
                    />
                <label>City:</label>
                <input
                    type="text"
                    value={city} onChange={(e) => setCity(e.target.value) }
                        
                    
                />
                <label>Pincode:</label>
                <input
                    type="text"
                    value={pincode} onChange={(e) => setPincode(e.target.value) }
                        
                    
                />
                <label>Username:</label>
                <input
                    type="text"
                    value={username} onChange={(e) => setUsername(e.target.value) }
                        
                    
                />
                <label>Password:</label>
                <input
                    type="password"
                    value={password} onChange={(e) => setPassword(e.target.value) }
                    
                />
                <label>Contact:</label>
                <input
                    type="text"
                    value={contact} onChange={(e) => setContact(e.target.value) }
                    
                />
                {/* <label>Select Role:</label> */}
                {/* <select
                    value={fullname} onChange={(e) => setFullname(e.target.value) }
                    >
                    <option value="">--- Select Role ---</option>
                    <option value="Admin">Admin</option>
                    <option value="Donor">Donor</option>
                    <option value="Receiver">Receiver</option>
                </select> */}
                <button onClick={handleRegistration}>Register</button>
            </form>
        </div>
    );

    }

