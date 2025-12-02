import { useState, useContext } from 'react'
import { Link, useNavigate  } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/OmniLogo.png';

const LoginPage = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailValidate, setEmailValidate] = useState(false);
    const [passwordValidate, setPasswordValidate] = useState(false);
    const [data, setData] = useState();
    const [error, setError] = useState();
    
    const loginData = {
        email: email,
        password: password
    }

    const loginSubmit = (event) => {
        event.preventDefault();
        if (emailRegex.test(email) && password) {
            axios.post('http://localhost:5000/login', loginData)
            .then(response => {
                if(response.data.email){
                    sessionStorage.setItem('loginID', response.data._id);
                    sessionStorage.setItem('loginEmail', response.data.email);
                    sessionStorage.setItem('loginName', response.data.name);
                    navigate('/dashboard');
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
    
      <div className='login-page'>
    <img className='logo' src={logo} width="100" height="50" />
        <section className="vh-100">
            <div className="container py-3 h-100">
                <div className="row d-flex">
                <div className="col-12">
                    <div className="card shadow-2-strong">
                        <div className="card-body text-center">

                            <h3 className="mb-5">Sign in</h3>
                            <form onSubmit={loginSubmit}>
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <label className="form-label" htmlFor="typeEmail">Email</label>
                                    <input type="email" id="typeEmail"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control form-control-lg" />
                                    <div className='invalid-feedback'> {emailValidate ? 'Please enter valid Email ID' : ''}</div>
                                </div>

                                <div data-mdb-input-init className="form-outline mb-4">
                                    <label className="form-label" htmlFor="typePasswor">Password</label>
                                    <input type="password" id="typePasswor" 
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control form-control-lg" />
                                     <div className='invalid-feedback'>{passwordValidate ? 'Please enter valid Password' : ''}</div>
                                </div>

                                <div className=" mb-3">
                                    <Link to="/forgotPassword">Forgot password?</Link>
                                </div>

                                <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-block w-100" type="submit">Login</button>
                            </form>
                        </div>
                        <div className="text-center">
                            <p>Not a member? <Link to="/register">Register</Link></p>
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

export default LoginPage
