import { io } from 'socket.io-client';

const SOCKET_SERVER_URL = 'http://localhost:4202';

export const socket = io(SOCKET_SERVER_URL, {
    autoConnect: false
});