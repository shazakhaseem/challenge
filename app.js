$(function() {
    var yearRightnow = new Date().getFullYear();
var monthRightnow= new Date().getMonth();
var dayRightnow= new Date().getDate();

    $("form").submit(function(event) {
        event.preventDefault();
        var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var yearSelected = $("#year").val();
        var monthSelected = $('#month').val();
        var daySelected= parseInt($('#day').val());
        var old = yearRightnow - yearSelected;
        var monthDays2=0;
        var monthDays1=0;

var oldDays= old * 365;
for ( var i=0 ; i < monthSelected; i++){
 monthDays1 = daysInMonth[i];}
for ( var i=0 ; i < monthRightnow; i++){
    monthDays2 = daysInMonth[i];}
    var fullOldDays = oldDays + monthDays2 - monthDays1 + dayRightnow - daySelected;
        if (fullOldDays >= 6571) {
            swal ( "You are over 18" ,  "Welcome!" ,  "success");
        
            window.location = "https://www.youtube.com/";

        } else {
            swal ( "Ooops!" , "You Still Young!" ,  "error")        
        }
    });
});

