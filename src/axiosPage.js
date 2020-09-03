import axios from 'axios';

const axiosPage = axios.create({
    baseURL: 'https://layout-js7.firebaseio.com/'
});

export default axiosPage;