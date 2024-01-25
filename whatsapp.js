document.getElementById("whats-chat").addEventListener("click", showchatbox);

document.getElementById("send-btn").addEventListener("click", sendmsg);
window.addEventListener("load", showchatboxtime);
function showchatbox() {
  document.getElementById("chat-box").style.right = "0px";
}
function closechatbox() {
  document.getElementById("chat-box").style.right = "-500px";
}
function showchatboxtime(){
setTimeout(launchbox,5000)
}

function sendmsg() {
  var msg = document.getElementById("whats-in").value;
  var relmsg = msg.replace(/ /g, "%20");
  window.open(
    "https://api.whatsapp.com/send?phone=+8801648914767&text=" + relmsg,
    "_blank"
  );
}
