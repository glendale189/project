document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    // Your EmailJS service ID and Template ID
    emailjs.init("YOUR_SERVICE_ID");

    emailjs.sendForm('contact-form', 'template_id')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Email sent successfully!");
      })
      .catch((err) => {
        console.log('FAILED', err);
        alert("Email sending failed!");
      });
  });