
var isChatIconsOpen = false;

var mainChat = document.getElementById("main-chat-button");
var isOpen = false;
const chat1 = document.getElementById("chat-icon1");
const chat2 = document.getElementById("chat-icon2");
const chat3 = document.getElementById("chat-icon3");
const emailButton2 = document.getElementById("chat-widget");

function toggleChatIcons() {
  var chatIcons = document.getElementById("chat-icons");
  isChatIconsOpen = !isChatIconsOpen;

  if (isChatIconsOpen) {
    chatIcons.style.display = "flex";
    mainChat.innerHTML = "<i class='fas fa-times'></i>";
  } else {
    chatIcons.style.display = "none";
    mainChat.innerHTML = "<i class='fa fa-comment-alt'></i>";
    document.getElementById('chat-box').style.right='-500px';
    window.HubSpotConversations.widget.close();
    chat1.innerHTML = "<i class='fab fa-hubspot'></i>";
    chat2.innerHTML = "<i class='fab fa-whatsapp'></i>";
    emailButton2.style.display= "none";
    chat3.innerHTML = "<i class='fa fa-envelope'></i>";
  }
}


function toggleIndividualChat1() {
  
  isOpen = !isOpen;
  if (isOpen) {
    window.HubSpotConversations.widget.open();
    chat1.innerHTML = "<i class='fas fa-times'></i>";
  } else {
    window.HubSpotConversations.widget.close();
    chat1.innerHTML = "<i class='fab fa-hubspot'></i>";
  }
}



function toggleIndividualChat2() {
  
  isOpen = !isOpen;
  if (isOpen) {
    document.getElementById('chat-box').style.right='20px';
    chat2.innerHTML = "<i class='fas fa-times'></i>";
    
  } else {
    document.getElementById('chat-box').style.right='-500px';
    chat2.innerHTML = "<i class='fab fa-whatsapp'></i>";
  }
}

function toggleIndividualChat3() {
  
  isOpen = !isOpen;
  if (isOpen) {
    emailButton2.style.display ="block";
    chat3.innerHTML = "<i class='fas fa-times'></i>";
  } else {
    emailButton2.style.display= "none";
    chat3.innerHTML = "<i class='fa fa-envelope'></i>";
  }
}
