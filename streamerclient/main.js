const urlParams = new URLSearchParams(window.location.search);
const nm_codeid = urlParams.get("nm_codeid");

let socket = new WebSocket("ws://localhost:5000");

let streamerClient;

socket.onopen = function (e) {
  socket.send(
    JSON.stringify({
      nm_codeid: nm_codeid,
    })
  );
};

socket.onmessage = function (event) {
  let json = JSON.parse(event.data);

  if(json.status == 0) new Notification("ok", `Connected! ID: ${json.id}`);

  if(json.type == "settings") {
    streamerClient = new StreamerClient(json.SC_Settings);
  } 

  if(json.status == 200) {
    new Notification("don", `${json.debug.message}`)
    console.log(json.debug)
  }
};
