const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", submitEvent);

function submitEvent(event){
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    
    if (email === "" || password === "") {
        return alert('All form fields must be filled in');
    }

    console.log(`Email is ${email}`);
    console.log(`Password is ${password}`);
    form.reset();
}