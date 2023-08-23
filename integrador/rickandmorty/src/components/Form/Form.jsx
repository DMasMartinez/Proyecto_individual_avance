// import App from "../../App"
import validate from "./validation";
import { useState } from 'react'
import './Form.css'
import logimg from './rymorty.jpg'
export default function Form({login}){
  
    const [userData, setUserData] = useState({
        email : "",
        password : ""
    })
    const [errors,setErrors] = useState({
        email : "",
        password : ""
    })
    const handlechange = (event) => {
        const inputname = event.target.name
        setUserData({...userData,
        [inputname]:event.target.value})
        setErrors(validate({...userData,
            [inputname]:event.target.value}))
    }
    const handlersubmit = (event)=>{
        event.preventDefault()
        login(userData)
    }
    
    return (<> 
            
            <form onSubmit={handlersubmit}>
                <img src={logimg} alt='login'/>
                <div className="form_email">
                    <label>Email</label>
                    <input type="text" value={userData.email} name='email' onChange={handlechange}></input>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form_password">
                    <label>Contrasena</label>
                    <input type="password" value={userData.password} name='password' onChange={handlechange}></input>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="button">
                    <button>Submit</button>
                </div>
            </form>
            
        </>
    ) 
            {/* <form onSubmit={Handlersubmit}>
                <div>
                    <label htmlFor="">Email :</label>
                    <input type="Text"
                    name="email"
                    value={form.email}
                    onChange={handlechange}
                    />
                </div>
                <div>
                    <label htmlFor="" value={form.password}>Password :</label>
                    <input type="Text" 
                        name="password" 
                        onChange={handlechange}
                    />

              
                    {errors.passord && <p>{errors.passsword}</p>}
                </div>
                <button type="submit">Submit</button>
            </form> */}
       
    
}