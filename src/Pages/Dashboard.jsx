import { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import Header from '../Components/header';
import documentImg from '../assets/document.jpg';
import hybrisImg from '../assets/hybris.png';
import softwareImg from '../assets/software.jpg';
import Footer from '../Components/Footer';


const directoryPath = './Hybris';


const Dashboard = () => {

  return (
    <>
        <Header />
      <div className='dashboard-page mt-5'>
        <h1 className='dashboard-page-title mb-5'>Dashboard</h1>
        <div className='data-lists row'>
            
            <div className='col data-list'>
                <div className="card">
                    <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                        <img src={hybrisImg} className="img-fluid"/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Hybris</h5>
                        <Link className='btn btn-primary' to="/hybris">View</Link>
                    </div>
                </div>
            </div>

            <div className='col data-list'>
                <div className="card">
                    <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                        <img src={softwareImg} className="img-fluid"/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Softwares</h5>
                        <Link className='btn btn-primary' to="/softwares">View</Link>
                    </div>
                </div>
            </div>

            <div className='col data-list'>
                <div className="card">
                    <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                        <img src={documentImg} className="img-fluid"/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Documents</h5>
                        <Link className='btn btn-primary' to="/documents">View</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
        <Footer />
    </>
  )
}

export default Dashboard
