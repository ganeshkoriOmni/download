import { useState, useContext, useEffect } from 'react'
import axios from 'axios';
import Header from '../Components/header';
import documentImg from '../assets/document.jpg';
import Footer from '../Components/Footer';

const Documents = () => {

    const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const backendPath = import.meta.env.VITE_BACKEND_URL;
  //const backendPath = 'http://localhost:5000';

  useEffect(() => {
    axios.get(`${backendPath}/documents`)
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
        <Header />
      <div className='dashboard-page mt-5'>

        <h1 className='dashboard-page-title mb-5'>Documents</h1>
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
                            <img src={documentImg} className="img-fluid"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{item}</h5>
                            <a href={`${backendPath}/Documents/${item}`} target='_blank' className="btn btn-primary" data-mdb-ripple-init>Download</a>
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

export default Documents
