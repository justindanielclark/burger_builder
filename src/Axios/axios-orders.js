import axios from 'axios';

const axiosOrderInstance = axios.create({
  baseURL: 'https://react-my-burger-15ecf.firebaseio.com/'
});

export default axiosOrderInstance;