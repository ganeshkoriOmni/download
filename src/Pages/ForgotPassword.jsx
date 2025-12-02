import { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/OmniLogo.png';

const ForgotPassword = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const [email, setEmail] = useState('');
    const [successMsg, setSuccessMsg] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);
    const [tryMsg, setTryMsg] = useState(false);

    const [emailValidate, setEmailValidate] = useState(false);
    
    const registerData = {
        email: email
    }

    const forgotSubmit = (event) => {
        event.preventDefault();
        if (emailRegex.test(email)) {
            axios.post('http://localhost:5000/forgotPassword', registerData)
            .then(response => {
                console.log('forgotSubmit : ', response.data)
                if(response.data.status == 'ok'){
                    setSuccessMsg(true);
                }else{
                    setErrorMsg(true);
                }
            })
            .catch(error => {
                setTryMsg(true);
            });
        } else {
            if (!emailRegex.test(email)){
                setEmailValidate(true);
            }else{
                setEmailValidate(false);
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

                                <h3 className="mb-5">Forgot Password</h3>
                                <div className={errorMsg ? 'error-show alert alert-danger' : 'error-hide'}>Email ID not vailable.</div>
                                <div className={tryMsg ? 'error-show alert alert-danger' : 'error-hide'}>Some error, Please after some time.</div>
                                <div className={successMsg ? 'error-show alert alert-success' : 'error-hide'}>Change password link sent to your email ID.</div>
                                <form onSubmit={forgotSubmit}>
                                    <div data-mdb-input-init className="form-outline mb-4">
                                        <label className="form-label" htmlFor="typeEmail">Email</label>
                                        <input type="email" id="typeEmail" 
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="form-control form-control-lg" />
                                    </div>

                                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-block w-100" type="submit">Send</button>
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

export default ForgotPassword
