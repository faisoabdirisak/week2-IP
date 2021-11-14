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