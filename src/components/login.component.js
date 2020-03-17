import React, {useState } from "react";
import Auth from '../networkaccess/auth'
import { useHistory,withRouter } from "react-router-dom";

export default withRouter((props)=>{
    const history = useHistory();
    console.log(props)
    // const isloggedin=props.logged.isloggedin
    // const setloggedin=props.logged.setisloggedin
    const [user,setuser]=useState('')
    const [pass,setpass]=useState('')
    const [isloggedin,setloggedin]=useState(false)
    const [showdat,setshowDat]=useState(null)
    const onusernamechanged=(event)=>setuser(event.target.value)
    const onpasschanged=(event)=>setpass(event.target.value)

    const loginsetstate=(event)=>{
            event.preventDefault()
            Auth.login({user,pass})
                .then((res)=>{
                    console.log(res)
                    setloggedin(true)
                    setshowDat("LogIn SuccessFull")
                    localStorage.setItem('token',res.data.token);
                    
                    //window.location=`http://localhost:${process.env.PORT||3333}/main/index.html`
                    window.location="https://selfie---app.herokuapp.com/main/index.html"
                })
                .catch((e)=>{
                    console.log(e)
                    setshowDat("Wrong Username or Password")
                })
    }
    
    return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>User Name</label>
                    <input onChange={onusernamechanged} type="text" className="form-control" placeholder="Enter Username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input onChange={onpasschanged} type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button onClick={loginsetstate} type="submit" className="btn btn-primary btn-block">Submit</button>
                {
                    isloggedin?<p>Sign in Successful</p>:<p>{showdat}</p>
                } 
            </form>
        );
    
})
