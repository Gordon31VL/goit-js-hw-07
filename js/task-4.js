const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", submitEvent);

function submitEvent(event){
    event.preventDefault();
    const form = event.target;
    const user = {}
    user.email = form.elements.email.value.trim();
    user.pass = form.elements.password.value.trim();
    
    if (user.email === "" || user.pass === "") {
        return alert('All form fields must be filled in');
    }

    console.log(user);
    form.reset();
}