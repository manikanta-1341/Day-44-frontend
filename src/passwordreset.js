import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {Typography, TextField, Button} from '@mui/material';



export default function Passwordreset() {
    const[email, setEmail ] =React.useState('')
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await axios.post('https://day-44.herokuapp.com/passwordreset',{
                email : email
            })
            if(response){
                alert("Reset link sent to registerd Email")
            }
        }
        catch(err){
            console.log(err)
        }
    }
    return (
        <>
            <div style={{ margin: '5%' }}>
                <Typography variant="h4" component="div"> Password Reset  </Typography> <br /> <br />
                <form onSubmit={handleSubmit}>
                    <div>
                        < TextField type="email" name="Email" label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div> <br />
                    <Button variant="contained" type="submit" > Submit </Button>
                </form>
            </div>
        </>
    );
}