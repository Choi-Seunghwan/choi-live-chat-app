import io from 'socket.io-client';

class ServiceWebSocket {
  ws;
  connectionStatus;
  connectionStatuses;

  constructor() {
    this.connectionStatus = 1;
    this.connectionStatuses = {
      IDLE: 1,
      CONNECTING: 2,
      CONNECTED: 3,
      DISCONNECTED: 4,
      WAITING: 5
    };
  }

  connection() {
    this.ws = io('localhost:5000');
  }

  sendMessage(method, param) {
    if (!this.ws) return false;
    console.log('sendMessage', method, param);
    this.ws.emit('message', method, param);
  }

  callUser(offer) {
    this.ws.emit('call-user', {
      offer
    });
  }
}

export default new ServiceWebSocket();
