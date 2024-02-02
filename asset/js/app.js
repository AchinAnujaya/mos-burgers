function login() {
  const validusername = "User123";
  const validpassword = "User@123";

  const username = document.getElementById("inputusername").value;
  const password = document.getElementById("inputPassword").value;

  if (username == validusername && password == validpassword) {
    console.log("login");
    alert("login ..");
    window.location.href = "view/html/home.html";
  } else {
    alert("Invaild Username or Password");
    window.location.href = "view/html/home.html";
  }
}
