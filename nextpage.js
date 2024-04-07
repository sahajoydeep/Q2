document.addEventListener("DOMContentLoaded", function () {
    const retrieveCookieButton = document.getElementById("retrieveCookie");
    retrieveCookieButton.addEventListener("click", function () {
        const mobileNumber = document.getElementById("mobileNumber").value;
        const studentCookie = getCookie("student");
        if (studentCookie) {
            const student = JSON.parse(studentCookie);
            if (student.mobile === mobileNumber) {
                alert(`Student Details:\nName: ${student.name}\nDate of Birth: ${student.dob}\nMobile Number: ${student.mobile}\nEmail ID: ${student.email}`);
            } else {
                alert("Student details not found for the provided mobile number.");
            }
        } else {
            alert("No student details found.");
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
