import React,{useState} from "react";
import Auth from '../networkaccess/auth'
import { useHistory,withRouter } from "react-router-dom";
const SignUp=()=>{
{       
    const history = useHistory();
    const [user,setuser]=useState('')
    const [pass,setpass]=useState('')
    const [name,setname]=useState('')
    const [match,setmatch]=useState(false)
    const setState=(event,counterFunction)=>counterFunction(event.target.value)
    const [pager,setpager]=useState(null)
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!match){
            setpager("Ensure password matches")
            return
        }
        Auth.register({user,name,pass})
            .then((res)=>{
                setpager("Registration Successfull")
                history.push('/sign-in')
                console.log(res)
            })
            .catch(()=>{
                setpager("Username already taken")
            })
    }
    const handleconfirmpass=(event)=>{
        if(event.target.value!=pass){
            setpager("Password do not match")
            setmatch(false)
        }
        else{
            setpager("Password Match")
            setmatch(true)
        }
    }
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input onChange={(e)=>setState(e,setname)} type="text" className="form-control" placeholder="Name" />
                </div>


                <div className="form-group">
                    <label>Username</label>
                    <input onChange={(e)=>setState(e,setuser)} type="text" className="form-control" placeholder="Username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input onChange={(e)=>setState(e,setpass)} type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input onChange={handleconfirmpass} type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button onClick={onSubmit} type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="text-right">
                   {pager}
                </p>
            </form>
        );
    }
}
export default SignUp