import axios from 'axios';

console.log('axios imported');

export default axios.create({
  baseURL: process.env.VUE_APP_API_SERVER_ADDR
});
