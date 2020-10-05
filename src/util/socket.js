import io from 'socket.io-client';

export default {
  socket: undefined,

  connection() {
    this.socket = io('localhost:5000');
  }
};
