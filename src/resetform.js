import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {Typography, TextField, Button} from '@mui/material';

export default function ResetForm(){
    const[password, setPassword] =React.useState('')
    const[conpassword, setConPassword] =React.useState('')
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(password === conpassword){
            alert("post in db")
        }
        else{
            alert("password not match")
        }
    }
    return(
        <>
            <div style={{margin:'5%'}}>
            <Typography variant="h4" component="div"> Login  </Typography> <br/> <br/>
            <form onSubmit={handleSubmit}>
                <div>
                    < TextField type="text" name="Username" label="Username"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
                </div> <br/>
                <div>
                    <TextField label="Password" type="password" name="password" value={conpassword} 
                    onChange={(e) => setConPassword(e.target.value)} />
                </div> <br/>
                <Button variant="contained" type="submit" > Submit </Button>
            </form>
        </div>
        </>
    );
} 