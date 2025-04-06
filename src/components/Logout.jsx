import React from 'react'
import { useNavigate } from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
import {useAuth} from "../context/AuthContext"
import "./Logout.module.css"


const LogoutButton = ()=>{
    const navigate = useNavigate();
    const {logout} = useAuth();

    const handleLogout = async () =>{
        try{
            await logout();
            navigate("/");
        }catch(err){
            console.error("Logout failed: ", err.message);
        }
    };

    return (
        <div onClick={handleLogout} className='logout-btn' title="Logout"> 
            <FiLogOut size={24}/>
            <span className='logout-text'>Logout</span>
        </div>
    );
};

export default LogoutButton;