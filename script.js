document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").onsubmit = function() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        if (name.trim() === "") {
            alert("Please enter your name.");
            return false; 
        } else if (!validateName(name)) {
            alert("Please enter a valid name (letters and spaces only).");
            return false; 
        }
        
        if (email.trim() === "") {
            alert("Please enter your email.");
            return false; 
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return false; 
        }
        
        if (message.trim() === "") {
            alert("Please enter your message.");
            return false; 
        }

        return true; 
    };
    function validateName(name) {
        var re = /^[A-Za-z\s]+$/;
        return re.test(name);
    }
    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
