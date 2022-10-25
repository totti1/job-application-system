import * as React from "react";
import styles from "./css/Auth.module.css"
import { Card, Grid, Container, TextField, Button } from "@mui/material"
import PasswordInput from "../lib/PasswordInput"
import { useNavigate } from "react-router-dom";

interface State {
    fullName: string;
    password: string;
    email: string;
  }
export default function Auth(){
    const navigate = useNavigate()
    const [values, setValues] = React.useState({
        fullName: "",
        email: "",
        password: ""
    })
    const handleFormData =(prop: keyof State) => (e: React.ChangeEvent<HTMLInputElement>) =>{
        setValues({ ...values, [prop]: e.target.value });
    }
    const handleSubmit = (event:any)=>{
        event.preventDefault()
        console.log(values)
        navigate("/home")
    }
    return(
        <div className={styles.container}>
            <Card sx={{width: "50%", padding: "2%"}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Container>
                            <form onSubmit={handleSubmit}>
                                <TextField 
                                    fullWidth
                                    label="Full Names" 
                                    variant="filled"
                                    value={values.fullName}
                                    name="fullName"
                                    onChange={handleFormData("fullName")}
                                    sx={{margin: "10px"}}
                                />
                                <TextField 
                                    fullWidth
                                    label="Email" 
                                    variant="filled" 
                                    value={values.email}
                                    name="email"
                                    onChange={handleFormData("email")}
                                    sx={{margin: "10px"}}
                                />
                                <PasswordInput 
                                    value={values.password} 
                                    name="password"
                                    handleChange={handleFormData("password")}
                                />
                                <Button 
                                    fullWidth
                                    variant="contained" 
                                    type="submit" 
                                    onClick={handleSubmit}
                                    sx={{margin: "10px"}}
                                >
                                    Sign Up
                                </Button>
                            </form>
                        </Container>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}