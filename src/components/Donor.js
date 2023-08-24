import React from 'react';

export default function Donor() {
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

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Upcoming Blood Donation Camps</h1>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={cellStyle}>Date</th>
                        <th style={cellStyle}>Location</th>
                        <th style={cellStyle}>City</th>
                        <th style={cellStyle}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={cellStyle}>19-08-2023</td>
                        <td style={cellStyle}>Ruby Hall Clinic</td>
                        <td style={cellStyle}>Pune</td>
                        <td style={cellStyle}><button style={buttonStyle}>Book Appointment</button></td>
                    </tr>
                    <tr>
                        <td style={cellStyle}>20-08-2023</td>
                        <td style={cellStyle}>Jehangir Hospital</td>
                        <td style={cellStyle}>Pune</td>
                        <td style={cellStyle}><button style={buttonStyle}>Book Appointment</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: '0 auto',
    },
    heading: {
        fontSize: '24px',
        marginBottom: '20px',
    },
};
