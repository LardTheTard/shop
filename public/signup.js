document.getElementById("signup-form").addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevent form from reloading the page
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();

    if (response.ok) {
      alert("User created! UID: " + data.uid);
    } else {
      alert("Signup failed: " + data.error);
    }
  } catch (error) {
    alert("Error connecting to backend: " + error.message);
  }
});