import { useState, useContext } from 'react'
import logo from '../assets/OmniLogo.png';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const navigate = useNavigate();

    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [fnameValidate, setfnameValidate] = useState(false);
    const [lnameValidate, setlnameValidate] = useState(false);
    const [emailValidate, setEmailValidate] = useState(false);
    const [passwordValidate, setPasswordValidate] = useState(false);
    const [data, setData] = useState();
    const backendPath = import.meta.env.VITE_BACKEND_URL;
    
    const registerData = {
        fname: fname,
        lname: lname,
        email: email,
        password: password
    }

    const registerSubmit = (event) => {
        event.preventDefault();
        if (emailRegex.test(email) && password && fname && lname) {
            axios.post(`${backendPath}/register`, registerData)
            .then(response => {
                console.log('data', response.data)
                if(response.data.status == 'ok'){
                    navigate('/login');
                }else{
                    setEmailValidate(true);
                    setPasswordValidate(true);
                }
            })
            .catch(error => {
                setEmailValidate(true);
                setPasswordValidate(true);
            });
        } else {
            if (!fname){
                setfnameValidate(true);
            }else{
                setfnameValidate(false);
            }
            if (!lname){
                setlnameValidate(true);
            }else{
                setlnameValidate(false);
            }
            if (!emailRegex.test(email)){
                setEmailValidate(true);
            }else{
                setEmailValidate(false);
            }
            if (!password){
                setPasswordValidate(true);
            }else{
                setPasswordValidate(false);
            }
        }
    };

  return (
    <>
    
      <div className='register-page'>
         <img className='logo' src={logo} width="100" height="50" />
        <section className="">
            <div className="px-4 py-5 px-md-5 text-center text-lg-start">
                <div className="container">
                <div className="row gx-lg-5 align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                    <h1 className="my-5 display-4 fw-bold ls-tight">
                        Register with ID <br />
                        <span className="text-primary">OmniReach email </span>
                    </h1>
                    </div>

                    <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="card">
                        <div className="card-body py-5 px-md-5">
                        <form onSubmit={registerSubmit}>
                            <div className="row">
                            <div className="col-md-6 mb-4">
                                <div data-mdb-input-init className="form-outline">
                                    <label className="form-label" htmlFor="form3Example1">First name</label>
                                    <input type="text" id="form3Example1" 
                                    onChange={(e) => setfname(e.target.value)}
                                    className="form-control" />
                                    <div className='invalid-feedback'> {fnameValidate ? 'Please enter First Name' : ''}</div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div data-mdb-input-init className="form-outline">
                                    <label className="form-label" htmlFor="form3Example2">Last name</label>
                                    <input type="text" id="form3Example2" 
                                    onChange={(e) => setlname(e.target.value)}
                                    className="form-control" />
                                    <div className='invalid-feedback'> {lnameValidate ? 'Please enter Last Name' : ''}</div>
                                </div>
                            </div>
                            </div>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example3">Email address</label>
                                <input type="email" id="form3Example3" 
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control" />
                                <div className='invalid-feedback'> {emailValidate ? 'Please enter valid Email ID' : ''}</div>
                            </div>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example4">Password</label>
                                <input type="password" id="form3Example4" 
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control" />
                                <div className='invalid-feedback'>{passwordValidate ? 'Please enter valid Password' : ''}</div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block mb-4 w-100">
                            Sign up
                            </button>

                            <div className="text-center">
                                <p>Already have account ? <Link to="/">Login</Link></p>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
      </div>

    </>
  )
}

export default Register
