
const sendButton = document.querySelector("#send");
const deleteButton = document.querySelector("#delete");
const namePerson = document.querySelector("#name").value.length;
const emailPerson = document.querySelector("#email").value.length;
const textData = document.querySelector("#text").value.length;


function avoidBehavior (event) {
    event.preventDefault();   
}

sendButton.addEventListener("clicl", avoidBehavior);

function clearFields() {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector("#textarea");
    for (let index = 0; index < formElements.length; index += 1) {
      const userInput = formElements[index];
      userInput.value = '';
      userInput.checked = false;
    }
    textArea.value = '';
  }

  deleteButton.addEventListener("click", clearFields);


function checkData (event) {
    if (namePerson < 10 || namePerson > 40) {
        alert("Invalid data!")
    } else if (emailPerson < 10 || emailPerson > 50) {
        alert("Invalid data!")
    } else if (textData > 500) {
        alert("Invalid data!")
    } else {
        alert("Data sent successfully! Thank you for participating in the TrybeTrip contest.");
    }
}

sendButton.addEventListener("click", checkData);
