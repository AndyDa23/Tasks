const login = "AndyDa23";
const passwd = "admin";

    function authorize() {
         const username = document.getElementById("username").value;
         const password = document.getElementById("password").value;

            if (!username && !password) {
                alert("Validation Error");
            } else if (username === login && password === passwd) {
                alert(`Hello ${username}`);
            } else if (username === login) {
                alert("Incorrect password");
            } else {
                alert("Incorrect username");
            }
        }