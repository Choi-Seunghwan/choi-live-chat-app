import io from 'socket.io-client';

export default {
  ws: undefined,
  connectionStatus: 1,
  connectionStatuses: {
    IDLE: 1,
    CONNECTING: 2,
    CONNECTED: 3,
    DISCONNECTED: 4,
    WAITING: 5
  },

  connection() {
    this.ws = io('localhost:5000');
  },

  sendMessage(method, param) {
    if (!this.ws) return false;

    this.ws.emit(method, param);
  },

  callUser(offer) {
    this.ws.emit('call-user', {
      offer
    });
  }
};
