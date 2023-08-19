import App from "../../App"
import { useState } from "react";
import Login from "./Login";

export default function Form(){
    const [form,setForm]=useState({
        email:"",
        password:""
     })
    const [errors,setErrors]= useState({})
    function handlechange(event){

        // if (event.target.name==="Email"){
        //     setForm({...form,username:event.target.value})
        // }
        const property = event.target.name;
        const valor = event.target.value;
        setForm({...form,[property]:valor})
        setErrors(validate({
            ...form,[property]:valor,
        }))
    const Handlersubmit = (event) => {
        event.preventDefault();
        Login(form);
    }
        
    }
    return (
        <form onSubmit={Handlersubmit}>
            <div>
                <label htmlFor="">Email :</label>
                <input type="Text" name="email" value={form.email} onChange={handlechange}></input>
            </div>
            <div>
                <label htmlFor="" value={form.password}>Password :</label>
                <input type="Text" name="password" onChange={handlechange}></input>
                {errors.passord && <p>{errors.passsword}</p>}
            </div>
            <button type="submit"></button>
        </form>
    )
}