
  function openEmailClient() {
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value.trim();

    const mailtoLink = `mailto:${email}?subject=Chat%20Request`;

    window.location.href = mailtoLink;
 
  }

  const emailButton = document.getElementById("chat-widget");

  let isEmailOpen = false;

  function displayEmailBox () {
    isEmailOpen = !isEmailOpen;

    if(isEmailOpen) {
        emailButton.style.display ="block";
    }
    else{
        
        emailButton.style.display= "none";
    }
    
  }
