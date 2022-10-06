function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Parte 1 :
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  let daysUl = document.getElementById("days");

    for (let num in decemberDaysList) {
        let daysLi = document.createElement("li");
        daysLi.innerHTML = decemberDaysList[num];
        daysUl.appendChild(daysLi);

        if (decemberDaysList[num] === 24 || decemberDaysList[num] === 31) {
            daysLi.className = "day holiday";
            daysUl.appendChild(daysLi);
        } else if ( decemberDaysList[num] === 4 || decemberDaysList[num] === 11 || decemberDaysList[num] === 18) {
            daysLi.className = "day friday";
            daysUl.appendChild(daysLi);
        } else if (decemberDaysList[num] === 25) {
            daysLi.className = "day holiday friday";
            daysUl.appendChild(daysLi);
        } else {
            daysLi.className = "day";
            daysUl.appendChild(daysLi);
        }
    };

   // Parte 2:

   function createbottom (buttonName) {
    let buttonsContainer = document.querySelector(".buttons-container");
    let buttonHoliday = document.createElement("button");
    buttonHoliday.id = "btn-holiday";
    buttonHoliday.innerHTML = buttonName;
    buttonsContainer.appendChild(buttonHoliday);
   }

   createbottom("Feriados");

 
    // Parte 3:

    function changeBackgroudColorHoliday() {
        let getButtonHoliday = document.querySelector("#btn-holiday");
        let holiday = document.querySelectorAll(".holiday");
        let backgroundColor = 'rgb(238,238,238)';
        let setColor = "white";

        getButtonHoliday.addEventListener("click", function () {
            for (let index = 0; index < holiday.length; index += 1) {
                if (holiday[index].style.backgroundColor === setColor) {
                  holiday[index].style.backgroundColor = backgroundColor;
                } else {
                  holiday[index].style.backgroundColor = setColor;
                }
              }
        });
    }

    changeBackgroudColorHoliday();
        
    // Parte 4:

    function createButton (buttonName) {
        buttonsContainer = document.querySelector(".buttons-container");
        let buttonFriday = document.createElement("button");
        buttonFriday.id = "btn-friday";
        buttonFriday.innerHTML= buttonName;
        buttonsContainer.appendChild(buttonFriday);
    }
    createButton("Sexta-Feira");


    //Parte 5:

    function changeTextButton() {
        let getButtonFriday = document.querySelector("#btn-friday");
        let friday = document.querySelectorAll(".friday");
        let buttonText = 'Sextooou!';
    

        getButtonFriday.addEventListener("click", function () {
            for (let index = 0; index < friday.length; index += 1) {
                if (friday[index].innerHTML !== buttonText) {
                  friday[index].innerHTML = buttonText;
                } else {
                  friday[index].innerHTML = decemberFridays[index];
                }
              }
        });
    }
    
    let decemberFridays = [4, 11, 18, 25];
    changeTextButton(decemberFridays);
  
  // Parte 6:

  function dayMouseOverZoom (event) {
    daysUl = document.getElementById("days");
    daysUl.addEventListener("mouseover", function(event) {
        event.target.style.fontSize = "50px";
        event.target.style.fontWeight = "600";
    })
 }

 function dayMouseOutZoom (event) {
    daysUl = document.getElementById("days");
    daysUl.addEventListener("mouseout", function(event) {
        event.target.style.fontSize = "20px";
        event.target.style.fontWeight = "200";
    })
}

    dayMouseOverZoom();
    dayMouseOutZoom();

    // Parte 7:

    function newTask (phrase) {
        let myTasks = document.querySelector(".my-tasks");
        let task = document.createElement("span");
        task.innerHTML = phrase;
        myTasks.appendChild(task);
    }

    newTask("cozinhar");

    // Parte 8:
    function addColor (colorName) {
        myTasks = document.querySelector(".my-tasks");
        let newDiv = document.createElement("div");
        newDiv.className = "task";
        newDiv.style.backgroundColor = colorName;
        myTasks.appendChild(newDiv);
    }

    addColor("purple");

    // Parte 9:

    function selectedTaskClickOn () {
        newDiv = document.querySelector(".task");
        newDiv.className = "task selected";
        newDiv.addEventListener("click",function (event) {
            if (newDiv.length === 0) {
                event.target.className = 'task selected';
              } else {
                event.target.className = 'task';}
        });
        
    }

    selectedTaskClickOn();

    // Parte 10:

    function colorDayOn () {
        let taskSElected = document.getElementsByClassName("task selected");
        daysUl = document.getElementById("days");
        newDiv = document.querySelector(".task");
        let taskColor = newDiv.style.backgroundColor;
        daysUl.addEventListener("click", function(event) {
            let eventTargetColor = event.target.style.color;
            if(selectedTask.length > 0 && eventTargetColor !== taskColor) {
              let color = selectedTask[0].style.backgroundColor;
              event.target.style.color = color;
            } else if (eventTargetColor === taskColor) {
              event.target.style.color = 'rgb(119,119,119)'; 
            }
          });
        }


    colorDayOn();
 

    // Bônus:


    function addAppointments () {
        let appointment = document.getElementById("task-input");
        let buttonAdd = document.querySelector('#btn-add');
        let getTaskList = document.querySelector('.task-list');
      
        buttonAdd.addEventListener('click', function() {
          if (appointment.value.length > 0) {
            let newLi = document.createElement('li');
            newLi.innerText = appointment.value;
      
            getTaskList.appendChild(newLi);
            appointment.value = '';
          } else {
            alert('Error: Digite ao menos 1 caractere.');
          }
        });
      
        appointment.addEventListener('keyup', function(event) {
          if (event.key === 'Enter' && appointment.value.length > 0) {
            let newLi = document.createElement('li');
            newLi.innerText = appointment.value;
      
            getTaskList.appendChild(newLi);
            appointment.value = '';
          }
        });
      }
      
      addAppointments();
    