// declaring arrays and variables

var CC, YY, MM, DD, d, dValue;
var femaleNames = ["Akosua", "Adwoa","Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var maleNames = ["Kwasi", "Kwadwo","Kawabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var dayNames = ["Sunday", "monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// creating function for validating the form

function validateform(){
    var year = document.myform.year.value;
    var month = document.myform.month.value;
    var date = document.myform.date.value;
    var gender = document.getElementsByName("gender");

    if(year =="" || year.length !=4 || year>2100 || year <=1900){
   alert("Please enter the correct year");
   return false;
    }
    else if(month =="" || month.length > 2 || month>12 || isNaN(month) || month <=0){
        alert("Please enter the correct month");
        return false;
         }
         else if(date =="" || date.length > 2 || date > 31 || isNaN(date) || date <=0){
            alert("Please enter the correct date");
            return false;
             }
             else if(gender[0].checked==false && gender[1].checked==false){
                 alert("please choose your gender");
                 return false;
             }
             else return true;
}

//creating function for calculating the dat of the week

function calculateDValue(){
    year = document.getElementById("year").value;
    CC = parseInt(year.substring(0,2));
    YY = parseInt(year.substring(2,4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
    console.log(d);
    return (Math.floor(d));
  }

  //creating function for the selection of gender based on their nicknames of the day

  function getGender(){
    var genders = document.getElementsByName("gender");
    if(genders[0].checked == true){
      var gender = "male";
    }
    else if(genders[1].checked == true){
      var gender = "female";
    }
    else{
      return false;
    }

    switch(gender){
        case "male":
          if (dValue == 1){
            alert("You were born on " +dayNames[0] + " and Your akan name is " +maleNames[0]);
          }
          else if(dValue == 2){
            alert("You were born on "+dayNames[1] + " and Your akan name is " +maleNames[1]);
          }
          else if(dValue == 3){
            alert("You were born on " +dayNames[2]+ " and Your akan name is " +maleNames[2]);
          }
          else if(dValue == 4){
            alert("You were born on "+dayNames[3] +  " and Your akan name is " +maleNames[3]);
          }
          else if(dValue == 5){
            alert("You were born on "+dayNames[4] +  " and Your akan name is " +maleNames[4]);
          }
          else if(dValue == 6){
            alert("You were born on "+dayNames[5] +  " and Your akan name is " +maleNames[5]);
          }
          else if(dValue == -0){
            alert("You were born on "+dayNames[6] + " and Your akan name is " +maleNames[6]);
          }
        break;
        case "female":
          if (dValue == 1){
            alert("You were born on "+dayNames[0] + " and Your akan name is  " +femaleNames[0]);
          }
          else if(dValue == 2){
            alert("You were born on " +dayNames[1] + " and Your akan name is " +femaleNames[1]);
          }
          else if(dValue == 3){
            alert("You were born on " +dayNames[2] + " and Your akan name is " +femaleNames[2]);
          }
          else if(dValue == 4){
            alert("You were born on " +dayNames[3] + " and Your akan name is " +femaleNames[3]);
          }
          else if(dValue == 5){
            alert("You were born on " +dayNames[4] + " and Your akan name is " +femaleNames[4]);
          }
          else if(dValue == 6){
            alert("You were born on " +dayNames[5] + " and Your akan name is " + femaleNames[5]);
          }else if(dValue == -0){
            alert("You were born on " +dayNames[6] + " and Your akan name is " +femaleNames[6]);
          }
        break
        default:
              
      }
}
function getName(){
    dValue = calculateDValue();
    getGender();
   
  }