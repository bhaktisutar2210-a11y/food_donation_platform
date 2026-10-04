function loginUser(event) {

    event.preventDefault();

    let userType = document.getElementById("userType").value;

    if (userType === "donor") {
        window.location.href = "donor.html";
    }

    else if (userType === "ngo") {
        window.location.href = "ngo.html";
    }

    else if (userType === "admin") {
        window.location.href = "admin.html";
    }

    else {
        alert("Please select user type");
    }
}


function registerUser(event) {

    event.preventDefault();

    alert("Registration successful!");

    window.location.href = "login.html";
}
function submitDonation(event) {

    event.preventDefault();

    alert("Food donation submitted successfully!");

    window.location.href = "my-donations.html";
}