AOS.init({
    duration: 1200,
    once: false,
  });
  
  // Get the form element
  var form = document.getElementById("contactForm");
                    
// Add event listener for keyup event on the form
form.addEventListener("keyup", function(event) {
  // Check if the key pressed is Enter (key code 13)
  if (event.keyCode === 13) {
    // Prevent form submission
    event.preventDefault();

    // Call your function here or perform any desired action
    submitForm();
  }
});

// Example function to be executed on form submission or Enter key press
function submitForm() {
  // Retrieve form input values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Validate form input
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
  } else {
    // Perform form submission or any other desired action
    alert("Form submitted!");
    // Clear form input values
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
  }
}

