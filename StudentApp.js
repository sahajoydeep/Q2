document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("studentForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const dob = document.getElementById("dob").value;
        const mobile = document.getElementById("mobile").value;
        const email = document.getElementById("email").value;

        const student = {
            name: name,
            dob: dob,
            mobile: mobile,
            email: email
        };

        document.cookie = `student=${JSON.stringify(student)}`;

        window.location.href = "nextpage.html";
    });

    document.getElementById("name").addEventListener("focusout", function () {
        const nameInput = this.value;
        const regex = /^[A-Za-z\s]+$/;
        if (!regex.test(nameInput) || nameInput.trim() === "") {
            alert("Name should contain only alphabets and spaces, and cannot be blank.");
            this.value = ""; // Clear the field
        }
    });

    document.getElementById("dob").addEventListener("focusout", function () {
        const dobInput = this.value;
        const regex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        if (!regex.test(dobInput) || dobInput.trim() === "") {
            alert("Date of birth should be in dd/mm/yyyy format and cannot be blank.");
            this.value = ""; // Clear the field
        }
    });

    document.getElementById("dob").addEventListener("change", function () {
        const dob = new Date(this.value);
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        document.getElementById("age").value = age;
    });

    document.getElementById("mobile").addEventListener("focusout", function () {
        const mobileInput = this.value;
        const regex = /^[1-9][0-9]*$/;
        if (!regex.test(mobileInput) || mobileInput.trim() === "" || mobileInput.startsWith("0")) {
            alert("Mobile number should contain only numbers, cannot start with 0, and cannot be blank.");
            this.value = ""; // Clear the field
        }
    });

    document.getElementById("email").addEventListener("focusout", function () {
        const emailInput = this.value;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(emailInput) || emailInput.trim() === "" || emailInput.startsWith("@") || !(emailInput.endsWith(".com") || emailInput.endsWith(".in"))) {
            alert("Email should be in correct format (e.g., example@example.com) and cannot be blank.");
            this.value = ""; // Clear the field
        }
    });

});

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName.trim() === name) {
            return cookieValue;
        }
    }
    return null;
}
