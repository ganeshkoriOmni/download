
export default LoginAPI = (data) => {
    axios.get('http://localhost:5000/login')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
}

export const HybrisAPI = (data) => {
    return axios.get('http://localhost:5000/hybris')
}