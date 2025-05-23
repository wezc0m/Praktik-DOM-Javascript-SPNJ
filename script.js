document.getElementById('joinForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const message = document.getElementById('joinMessage');
      if(email) {
        message.textContent = "Thank you for joining! Please check your email soon.";
        message.style.color = "#2d7a2d";
        this.reset();
      } else {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "#c00";
      }
    });