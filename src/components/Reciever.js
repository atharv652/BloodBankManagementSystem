import React, { useState } from 'react';

export default function CheckAvailabilityUI() {
    const [selectedBloodType, setSelectedBloodType] = useState('---blood type---');
    const [selectedQuantity, setSelectedQuantity] = useState('select quantity(in bags)');
    const [availableUnits, setAvailableUnits] = useState({
        'A+': 0,
        'B+': 5,
        'O+': 3,
        'A-': 0,
        'B-': 0,
        'O-': 0,
        'AB-': 2,
        'AB+': 1,
    });
    const [isAvailable, setIsAvailable] = useState(true);

    const handleCheckAvailability = () => {
        const units = availableUnits[selectedBloodType] || 0;
        setIsAvailable(units > 0);
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Check Blood Availability</h1>
            <label style={styles.label}>Select Blood Type:</label>
            <select style={styles.select} value={selectedBloodType} onChange={e => setSelectedBloodType(e.target.value)}>
                <option value="---blood type---">---blood type---</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="O+">O+</option>
                <option value="A-">A-</option>
                <option value="B-">B-</option>
                <option value="O-">O-</option>
                <option value="AB-">AB-</option>
                <option value="AB+">AB+</option>
            </select>
            <label style={styles.label}>Select Quantity:</label>
            <select style={styles.select} value={selectedQuantity} onChange={e => setSelectedQuantity(e.target.value)}>
                <option value="select quantity(in bags)">---select quantity(in bags)---</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button style={styles.button} onClick={handleCheckAvailability}>
                Check Availability
            </button>
            <div style={styles.info}>
                {isAvailable ? (
                    <p>Available units: {availableUnits[selectedBloodType]}</p>
                ) : (
                    <p style={{ color: 'red' }}>Not available</p>
                )}
            </div>
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
        maxWidth: '400px',
        margin: '0 auto',
    },
    heading: {
        fontSize: '24px',
        marginBottom: '10px',
    },
    label: {
        display: 'block',
        marginBottom: '6px',
        fontSize: '16px',
        fontWeight: 'bold',
    },
    select: {
        width: '100%',
        padding: '8px',
        marginBottom: '20px',
        fontSize: '14px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    info: {
        marginTop: '20px',
        fontSize: '14px',
    },
};
