function detectDevice() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (!isMobile) {
      document.body.innerHTML = '<div style="text-align: center;"><img src="https://astathink.github.io/blogger/MHN/logo.png" alt="Logo" style="width: 200px; margin-bottom: 20px;"><h1>Please load this website from a mobile device.</h1></div>';
      document.body.style.textAlign = 'center';
      document.body.style.marginTop = '20%';
      document.body.style.fontFamily = 'Arial, sans-serif';
    }
  }

  window.onload = detectDevice;
