import React, { useReducer, useState } from 'react';

import './login.css';
import { Dispatch } from 'react';

import { useNavigate } from 'react-router-dom';


export default function Registration() {
    
    const init={
        fullname: {value: "",touched:false, valid: false, error: "" },
        address: {value: "",touched: false, valid: false, error: ""},
        city: {value: "",touched: false, valid: false, error: ""},
        pincode: {value: "",touched: false, valid: false, error: ""},
        username: {value: "",touched: false, valid: false, error: ""},
        password: {value: "",touched: false, valid: false, error: ""},
        contact: {value: "",touched: false, valid: false, error: ""},
        blood_grp: {value: "",touched: false, valid: false, error: ""},
        gender :  {value: "",touched: false, valid: false, error: ""},
        role_id: {value: "",touched: false, valid: false, error: ""},
        formvalid:false
    }

    const validateData = (name,value) => {
        let valid = false;
        let error = "";
        switch(name){
            case 'fullname' : var pattern = /^[A-Za-z\\s]{2,30}$/
                if(pattern.test(value)) {
                    valid = true;
                    error ="";
                }
                else {
                    valid = false;
                    error = "Enter Fullname"
                }
                break;

                case 'address' : var pattern = /^[A-Za-z0-9-]{3,25}$/
                if(pattern.test(value)){
                    valid = true;
                    error = "";
                }
                else{
                    valid = false;
                    error= "Enter Correct Address"
                }
                break;

                case 'city' : var pattern = /^[A-Za-z]{3,15}$/
                if(pattern.test(value)){
                    valid = true;
                    error = "";
                }
                else{
                    valid = false;
                    error= "Enter Correct City"
                }
                break;

                case 'pincode' : var pattern = /^[0-9]{6}$/
                if(pattern.test(value)){
                    valid = true;
                    error = "";
                }
                else{
                    valid = false;
                    error= "Enter Correct Pincode"
                }
                break;

                case 'username': var pattern = /^[A-Za-z0-9_]{2,15}$/
                if (pattern.test(value)) {
                    valid = true;
                    error = "";
                }
                else {
                    valid = false;
                    error = "Not available"
                }
                break;

                case 'password': var pattern = /^(?=.*[A-Za-z])(?=.*[@])(?=.*[0-9]).{8,}$/

                if (pattern.test(value)) {
                    valid = true;
                    error = "";
                }
                else {
                    valid = false;
                    error = "Invalid Password"
                }
                break;

            case 'contact':
                var pattern = /^[0-9]{10}$/
                if (pattern.test(value)) {
                    valid = true;
                    error = "";
                }
                else {
                    valid = false;
                    error = "Enter Correct Contact Number"
                }
                break;

            case 'blood_grp' : 
            var pattern = /^(A|B|AB|O)[+-]?$/

            if(pattern.test(value)){
                valid = true;
                error = "";
            }
            else{
                valid = false;
                error = "Enter Valid Blood Group"
            }
            break;

            
            case 'gender' : 
            var pattern = /^(Male|Female)$/
            if(pattern.test(value)){
                valid = true;
                error = "";
            }
            else{
                valid = false;
                error = "Enter Correct Gender"
            }
            break;

            case 'role_id' : 
            var pattern = /^[2-3]{1}$/
            if(pattern.test(value)){
                valid = true;
                error = "";
            }
            else{
                valid = false;
                error = "Enter Correct Role Id"
            }
        }
        return { valid, error};
    }

    const reducer = (state, action) => {
        switch(action.type) { 
            case 'update' :
                const { name, value, touched, valid, error, formvalid} = action.data
                return { ...state, [name] : {value, touched, valid, error }, formvalid}
            case 'reset' : 
                return init;
        }
    }

    const handleChange = (name, value) => {
        const { valid, error } = validateData(name, value);
        let formvalid = true;

        for(const key in info ) { 
            console.log( key + " : "+info[name].valid);
            if(info[name].valid === false){
                formvalid = false;
                break;
            }
        }
        console.log(formvalid);
        dispatch ({
            type : 'update',
            data : {name, value, touched: true, valid, error, formvalid},
        });
    };

    const onFocusout = (name, value) => {
        const { valid, error } = validateData (name, value);
        let formvalid = true; 

        for(const key in info) { 
            console.log(name + " : "+ info[name].valid);
            if(info[name].valid === true){
                formvalid = true;
                break;
            }
        }
        dispatch({
            type : 'update' , 
            data : {name, value, touched: true, valid, error, formvalid },
        });
    };

    const [info, dispatch] = useReducer(reducer, init);

    const navigate = useNavigate();

    const sendData = (e) => {
        e.preventDefault();
    
        const reqOptions = {
            method: 'POST',
            mode: 'cors',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                fullname: info.fullname.value,
                address: info.address.value,
                city: info.city.value,
                pincode: info.pincode.value,
                username: info.username.value,
                password: info.password.value,
                contact: info.contact.value,
                blood_grp: info.blood_grp.value,
                gender: info.gender.value,
                role_id: info.role_id.value,
            }),
        };
    
        fetch('http://localhost:8080/register1/add', reqOptions)
            .then((resp) => {
                if (resp.ok) {
                    console.log('Data Sent');
                    alert('Registration Successful...');
                } else {
                    alert('Registration Failed !!!');
                }
            })
            .then(() => {
                navigate('/login');
            })
            .catch((error) => {
                console.error('Fetch error:', error);
                alert('An error occurred during registration.');
            });
    };
    
    


    return(
        <div className='container-fluid w-50 h-50 bg-white p-'>
            <br/>

            <form action=''>
                <h1>Registration Form</h1><hr/>
                <div className='mb-3'>
            <label htmlFor='fullname' className='form-label'>
                Enter Name
            </label>
            <input
                type='text'
                className='form-control'
                id='fullname'
                placeholder='Enter Name...'
                name='fullname'
                value={info['fullname'].value}
                onChange={(e) => handleChange("fullname", e.target.value)}
            />
            <div className='error-msg' style={{ color: "red" }}>{info['fullname'].error}</div>
        </div>

        <div className='mb-3'>
            <label htmlFor='address' className='form-label'>
                Address
            </label>
            <input
                type='text'
                className='form-control'
                id='address'
                placeholder='Enter Address...'
                name='address'
                value={info['address'].value}
                onChange={(e) => handleChange("address", e.target.value)}
            />
            <div className='error-msg'>{info['address'].error}</div>
        </div>

        <div className='mb-3'>
            <label htmlFor='city' className='form-label'>
                City
            </label>
            <input
                type='text'
                className='form-control'
                id='city'
                placeholder='Enter City...'
                name='city'
                value={info['city'].value}
                onChange={(e) => handleChange("city", e.target.value)}
            />
            <div className='error-msg'>{info['city'].error}</div>
        </div>

        <div className='mb-3'>
            <label htmlFor='pincode' className='form-label'>
                Pincode :
            </label>
            <input
                type='number'
                className='form-control'
                id='pincode'
                placeholder='Enter Pincode...'
                name='pincode'
                value={info['pincode'].value}
                onChange={(e) => handleChange("pincode", e.target.value)}
            />
            <div className='error-msg'>{info['pincode'].error}</div>
        </div>

                <div class="mb-3">
                    <label for="username" class="form-label">User Name :</label>
                    <input type="text" class="form-control" id="username" placeholder="Enter username..." name="username"value={info['username'].value}
                        onChange={(e) => dispatch({ type: 'update', data: { name: "username", value: e.target.value, touched: true, valid: true, error: "", formvalid: true } })} />
                    <div className="error-msg"> {info.username.error}</div>
                </div>

                <div class="mb-3">
                    <label for="password" class="form-label">Password :</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter password" name="password"value={info['password'].value}
                        onChange={(e) => handleChange("password", e.target.value)} />
                    <div className="error-msg"> {info.password.error}</div>
                </div>

                <div class="mb-3">
                    <label for="contact" class="form-label">Contact No :</label>
                    <input type="number" class="form-control" id="contact" placeholder="Enter contact no..." name="contact" value={info['contact'].value}
                        onChange={(e) => handleChange("contact", e.target.value)} />
                    <div className="error-msg"> {info.contact.error}</div>
                </div>
                 <div className="mb-3">
                    <label htmlFor="blood_grp" className="form-label">
                        Blood Group
                    </label>
                    <select
                        className="form-control"
                        id="blood_grp"
                        name="blood_grp"
                        value={info['blood_grp'].value}
                        onChange={(e) => handleChange("blood_grp", e.target.value)}
                    >
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                    <div className="error-msg">{info.blood_grp.error}</div>
                </div>


                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">
                        Gender
                    </label>
                    <select
                        className="form-control"
                        id="gender"
                        name="gender"
                        value={info['gender'].value}
                        onChange={(e) => handleChange("gender", e.target.value)}
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <div className="error-msg">{info.gender.error}</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="role_id" className="form-label">Role Id :</label>
                    <select
                        className="form-control"
                        id="role_id"
                        name="role_id"
                        value={info['role_id'].value}
                        onChange={(e) => handleChange("role_id", e.target.value)}
                    >
                        <option value="">Select Role</option>
                        <option value="2">Receiver</option>
                        <option value="3">Donor</option>
                    </select>
                    <div className="error-msg">{info.role_id.error}</div>
                </div>


                <button type="submit" className="btn btn-primary btn-lg ms-2" disabled={info.formvalid ? false : true} onClick={(e) => { sendData(e) }}>Submit</button>
                <button type="reset" className="btn btn-danger btn-lg ms-2" onClick={() => { dispatch({ type: 'reset' }) }}>Clear</button>
            </form>
            {/* <p>{JSON.stringify(info)}</p> */}
        </div>
    )
}



























//     const handleRegistration = async () => {
//         const dataToSend = {
//             fullname: registrationData.fullname,
//             address: registrationData.address,
//             city: registrationData.city,
//             pincode: registrationData.pincode,
//             username: registrationData.username,
//             password: registrationData.password,
//             contact: registrationData.contact, // Add 'contact' to data
//         };

//         try {
//             const response = await fetch("http://localhost:8080/register/add", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(dataToSend), // Use JSON.stringify
//             });

//             if (response.ok) {
//                 console.log("Successfully Registered");
//             } else {
//                 console.error("Registration failed");
//             }
//         } catch (error) {
//             console.error('Network error', error);
//         }
//     };

//     return (
//         <div className="container">
//             <form className="registration-form">
//                 <h2>User Registration</h2>
//                 <label>Name:</label>
//                 <input
//                     type="text"
//                     value={registrationData.name} onChange={(e) => setRegistrationData({ name: e.target.value, })
//                     }
//                 />
//                 <label>Address:</label>
//                 <input
//                     type="text"value={registrationData.address}onChange={(e) =>setRegistrationData({address: e.target.value,})}
//                 />
//                 <label>City:</label>
//                 <input
//                     type="text"
//                     value={registrationData.city}onChange={(e) =>setRegistrationData({ city: e.target.value,
//                         })
//                     }
//                 />
//                 <label>Pincode:</label>
//                 <input
//                     type="text"
//                     value={registrationData.pincode}onChange={(e) => setRegistrationData({pincode: e.target.value,
//                         })
//                     }
//                 />
//                 <label>Username:</label>
//                 <input
//                     type="text"
//                     value={registrationData.username}onChange={(e) => setRegistrationData({username: e.target.value,
//                         })
//                     }
//                 />
//                 <label>Password:</label>
//                 <input
//                     type="password"
//                     value={registrationData.password}onChange={(e) =>setRegistrationData({ password: e.target.value,})
//                     }
//                 />
//                 <label>Select Role:</label>
//                 <select
//                     value={registrationData.role}onChange={(e) => setRegistrationData({role: e.target.value, })}
//                 >
//                     <option value="">--- Select Role ---</option>
//                     {/* <option value="Admin">Admin</option> */}
//                     <option value="Donor">Donor</option>
//                     <option value="Receiver">Receiver</option>
//                 </select>
//                 <button onClick={handleRegistration}>Register</button>
//             </form>
//         </div>
//     );
// }

// export default Registration;