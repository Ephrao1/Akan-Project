let dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
let femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

function validateForm() {
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;

    if (month < 1 || month > 12) {
        alert("Insert correct month betwen 1 and 12"); return false;
    }
    if (day < 1 || day > 31) {
        alert("Provide a valid date of birth"); return false;
    }
    if (year < 1920 || day > 2050) {
        alert("Provide a valid year of birth e.g 2021"); return false;
    }
    else{
        getUserInformation()
    }
}
 var getUserInformation = function() {
     let inputYear = document.getElementById("birthYear").value
     let intYear = parseInt(inputYear)

     let inputMonth = document.getElementById("birthMonth").value
     let intMonth = parseInt(inputMonth)

     let inputDay = document.getElementById("birthDay").value
     let intDay = parseInt(inputDay)

     let inputGender = document.getElementById("gender").value
     let akanName;

     let day = new Date(intYear+"-"+intMonth+"-"+inputDay).getDay()

     if(inputGender ==="Male"){
         alert("Your Akan name is " +akanName + "because you are male born on "+ dayNames[day])
     } else if (inputGender === "Female"){
         akanName = femaleNames[day]
         alert("Your Akan name is " + akanName + "because you are a female born on"+ dayNames[day])

     }
 }

 

