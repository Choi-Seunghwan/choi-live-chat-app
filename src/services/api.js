import axios from 'axios';

class API {
  constructor() {
    let _axios = axios.create({
      baseURL: process.env.VUE_APP_API_SERVER_ADDR + '/api'
    });
    _axios.interceptors.response.use(this.handleSuccess, this.handleError);
    this._axios = _axios;
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

  makeApiError(error) {
    return { errorCode: 'DEFAULT_ERROR', error };
  }

  get(path) {
    return this._axios
      .get(path)
      .then(response => response.data)
      .catch(error => this.makeApiError(error));
  }

  patch(path, payload) {
    return this._axios
      .request({
        method: 'PATCH',
        url: path,
        responseType: 'json',
        data: payload
      })
      .then(response => response.data)
      .catch(error => this.makeApiError(error));
  }

  post(path, payload) {
    return this._axios
      .request({
        method: 'POST',
        url: path,
        responseType: 'json',
        data: payload
      })
      .then(response => response.data);
  }
}

export default new API();
