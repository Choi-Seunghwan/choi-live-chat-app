import io from 'socket.io';

export default {
  socket: undefined,

  connection() {
    this.socket = io.connect('localhost:5000');
  }
};
