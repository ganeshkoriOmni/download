import { useState, useContext, useEffect } from 'react'
import axios from 'axios';
import Header from '../Components/header';
import hybrisImg from '../assets/hybris.png';
import Footer from '../Components/Footer';
//import HybrisAPI from '../API/api'


const Hybris = () => {

    const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const backendPath = 'http://localhost:5000';

  useEffect(() => {
    
    axios.get(`${backendPath}/hybris`)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const searchFilter = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
    };

  if (loading) return <div className='data-loading'>Loading...</div>;
  if (error) return <div className='data-error'>Error: {error.message}</div>;

  return (
    <>
        <Header />
      <div className='dashboard-page mt-5'>

        <h1 className='dashboard-page-title mb-5'>Hybris</h1>
        <div className="input-group mb-4">
            <input type="search" className="form-control rounded" placeholder="Search" 
                value={searchTerm}
                onChange={searchFilter}
                aria-label="Search" aria-describedby="search-addon" />
            <button type="button" className="btn btn-outline-primary" data-mdb-ripple-init>search</button>
        </div>
        <div className='data-lists row'>
            
            {data.map(item => (
                <div key={item} className='col-sm-3 data-list mb-4' id={item.toLowerCase().includes(searchTerm.toLowerCase()) ? 'data-list-show': 'data-list-hide'}>
                    <div className="card">
                        <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                            <img src={hybrisImg} className="img-fluid"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{item}</h5>
                            <a href={`${backendPath}/Hybris/${item}`} className="btn btn-primary" data-mdb-ripple-init>Download</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
        <Footer />
    </>
  )
}

export default Hybris
