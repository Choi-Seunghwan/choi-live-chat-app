import axios from 'axios';

class API {
  constructor() {
    let api = axios.create({
      baseURL: process.env.VUE_APP_API_SERVER_ADDR + '/api'
    });
    api.interceptors.response.use(this.handleSuccess, this.handleError);
    this.api = api;
  }

  handleSuccess(response) {
    return response;
  }

  handleError = error => {
    switch (error.response.status) {
      case 401:
      case 404:
      default:
        break;
    }
    return Promise.reject(error);
  };

  get(path, callback) {
    return this.api.get(path).then(response => callback(response.status, response.data));
  }

  patch(path, payload, callback) {
    return this.api
      .request({
        method: 'PATCH',
        url: path,
        responseType: 'json',
        data: payload
      })
      .then(response => callback(response.status, response.data));
  }

  post(path, payload, callback) {
    return this.api
      .request({
        method: 'POST',
        url: path,
        responseType: 'json',
        data: payload
      })
      .then(response => callback(response.status, response.data));
  }
}

export default new API();
