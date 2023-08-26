import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "./slice";

export default function Logout()
{
    // alert("in logout")
    const navigate = useNavigate;
     alert("in home")

    const dispatch = useDispatch();

    localStorage.clear();

    dispatch(logout())
    navigate("/home")

    navigate("/")
    
   
}