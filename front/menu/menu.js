import changeLocation from "/front/js/changeLocation.js";
import connectionWs from "/front/js/connectionWs.js";
// connection ws
const ws = await connectionWs();

ws.onmessage = function (ev) {
  console.log(ev);
  const message = JSON.parse(ev.data);

  // change menu
  changeLocation(message);
};
