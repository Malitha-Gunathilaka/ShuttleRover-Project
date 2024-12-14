import axios from 'axios';

const esp8266Ip = "http://192.168.4.1";

export const api = {
  sendCommand: (command) => axios.get(`${esp8266Ip}/move?dir=${command}`),
  setSpeed: (speed) => axios.get(`${esp8266Ip}/setSpeed?value=${speed}`),
  toggleMode: (isAuto) => axios.get(`${esp8266Ip}/${isAuto ? 'auto' : 'manual'}`),
  getShuttlecockCount: () => axios.get(`${esp8266Ip}/totalShuttlecockCount`)
};