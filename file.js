var CC, YY, MM, DD, d, dValue;
var femaleNames = ["Akosua", "Adwoa","Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var maleNames = ["Kwasi", "Kwadwo","Kawabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var dayNames = ["Sunday", "monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

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