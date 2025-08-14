import React,{useState} from 'react';
import './Login.css';    
import logo from '../../assets/logo.png';
import {login,signup } from '../../firebase'; 
import netflix_spinner from '../../assets/netflix_spinner.gif';

 
const Login = () =>{
     const  [signState,setSignState] = useState("Sign In");
     const [name,setName] = useState("");
     const [email,setEmail] = useState("");
     const [password,setPassword] = useState("");
     const [loading,setLoading] = useState(false);

    const user_auth= async(event)=>{
        event.preventDefault();
        setLoading(true);   
            if(signState==="Sign In"){
                await login(email,password);
            }
            else{
                await signup(name,email,password);
            }
            setLoading(false);
    }

     function handleSignState(){
        setSignState(signState==="Sign In"?"Sign Up":"Sign In");
     }

    return(
        loading? <div className="login-spinner">
            <img src={netflix_spinner} alt=""/>
        </div>:
    <div className="login">
        <img src={logo} className="login-logo" alt=""/>
        <div className="login-form">
            <h1>{signState}</h1>
            <form>
                {signState==="Sign Up"? <input type="text" placeholder="name" value={name} onChange={(e)=>
                   setName(e.target.value) 
                }/>:<></>}
                
                <input type="email" placeholder="email" value={email} onChange={(e)=>
                  setEmail(e.target.value)
                }/>
                <input type="password" placeholder="password" value={password} onChange={(e)=>
                  setPassword(e.target.value)
                }/>
                <button onClick={user_auth} type="submit">{signState}</button>
                 <div className="form-help">
                    <div className="remember">
                        <input type="checkbox"/>
                        <label>Remember me</label>
                    </div>
                    <p>Need help?</p>
                 </div>
            </form>
            <div className="form-switch">
                {signState==="Sign In"?
            <p>New to Netflix?   <span onClick={()=>{handleSignState()}}>Sign Up Now</span></p>:
            <p>Already have Account?  <span onClick={()=>{handleSignState()}}>Sign In Now</span></p>}

        </div>
        </div>
        
    </div>);
}
export default Login;