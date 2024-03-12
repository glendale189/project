function openOutlookCompose() {
    // Construct the email URL with subject, body, and recipient
    var emailUrl = 'https://outlook.office365.com/mail/deeplink/compose?subject=Project%20Query&body=Good%20Day%0A%0AI%20hope%20this%20finds%20you%20well,%20I%20was%20wondering%20about%20%5BInsert%20Thing%20You%20have%20a%20Question%20About%5D.%20Please%20could%20you%20tell%20me%20about%20%5BWhatever%20You%20specifically%20want%20to%20know%5D.&to=22100306@dut4life.ac.za';
    
    // Open the email URL in a new window/tab
    window.open(emailUrl, '_blank');
  }

  // Add event listener to the button
  document.getElementById('Compose').addEventListener('click', openOutlookCompose);