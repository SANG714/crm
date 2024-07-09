import React, {useState} from 'react'

import './Entry.style.css';
import LoginForm from '../../components/Login/Login.comp';
import ResetPassword from '../../components/Password-Reset/PasswordReset.comp';

const Entry = () => {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [formLoad, setFormLoad]=useState("login");

    const handleOnChange= (e) =>{
        const {name, value} = e.target;

    switch(name){
        case 'email':
            setEmail(value)
            break;

        case 'password':      setPassword(value)
            break;

        default:
            break;

    }
        };

    const handleOnSubmit= e => {
        e.preventDefault();

        if(!email || !password){
            return alert("Fill up all the fields");
        }
        //TODO call api to submit the form
        console.log(email, password)
    };

    const handleOnResetSubmit= e => {
        e.preventDefault();

        if(!email){
            return alert("Please enter your Email ID");
        }
        //TODO call api to submit the form
        console.log(email)
    };
    
    const formSwitcher = (formType) => {
        setFormLoad(formType)
    }

  return (
    <div className= "entry-page bg-info">
      <div className="form-body">
        {formLoad==="login" && (
        <LoginForm  handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        formSwitcher= {formSwitcher}
        email= {email}
        pass= {password}
        />
        )}

        {formLoad === "reset" && (
       <ResetPassword  handleOnChange={handleOnChange}
        handleOnResetSubmit={handleOnResetSubmit}
        formSwitcher= {formSwitcher}
        email= {email}
        />
        )}

      </div>
    </div>
  )
}

export default Entry
