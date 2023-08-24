import pic from '../staticSources/bloodb.jpg';
import React from 'react';
import './Home.css'; // Make sure to import your CSS file

export default function Home() {
    const imgStyle = {
        width: '1200px', // Set the desired width
        height: '600px', // Set the desired height
    };

    return (
        <div>
            <marquee behavior="scroll" direction="left" style={{ background: 'red', padding: '10px', fontWeight: 'bold' }}>
                Welcome to Lifestream BloodBank - Saving Lives Every Day!                                                                                      
                World Blood Donation Day is Celebrated on 24th June!!

            </marquee>
            <img src={pic} style={imgStyle} alt="BloodBank" />
            <div className="overlay-text">
                <h1>Welcome To Lifestream</h1>
                <h1>Blood Bank</h1>
            </div>
        </div>
    );
}
