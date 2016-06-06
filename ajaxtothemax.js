console.log('hello from js');
$(document).ready(function(){
  console.log('hello from jquery');
});
//
// 1. get info from github file
// 2. create counter to track the index of the students arrays
// 3. create profile div to display student info
// 4. create and link the next button to a for loop that loops through the arrays
// 5. create and link the previous button

var num = 0;

$(function(){
     $.ajax({
       url: 'https://raw.githubusercontent.com/devjanaprime/2.4-jQueryAjaxJSON/master/students.json',
       dataType: 'json',
       success: function ( data ){
         console.log(' in ajax success' );
         list = data;
         console.log('in ajax function, info is: ' + list );

var createStudent = function(){
  console.log('in createStudent');
  var first = list.students[num].first_name;
  var last = list.students[num].last_name;

         var studentDiv = document.createElement( 'div' );
         studentDiv.id = 'studentDiv';
           $('#studentDiv').append( "<p id= 'info'> </p> <button id = 'nextStudentButton'> Next </button> <button id = 'studentInfoButton'> Student Info </button> <button id = 'previousButton'> Previous </button>");
           $('#info').text(list.students[num].first_name + " " + list.students[num].last_name);
           console.log('in createStudent after the append for index: ' + num);
           $('#classmateCount').text("(" + Number(num + 1) + "out of 20)");

           var studentInfoButton = document.createElement( 'button' );
           studentInfoButton.id = 'studentInfoButton';
           studentInfoButton.className = 'studentInfoButton';

           var previousButton = document.createElement( 'button' );
           previousButton.id = 'previousButton';
           previousButton.className = 'previousButton';

           $('#nextStudentButton').click(function(){
             console.log('next student button clicked');
             while (num < list.students.length) {
               $(console.log(list.students.length));
               $(this).parent().remove();
               console.log('after removing the parent');
               num++;
               console.log(num);
               createStudent();
               console.log('end of next student button');
               return;
              }
           });
         };

         createStudent();
       }, //ends success
       statusCode: {
         404: function() {
           alert('error connecting to server');
         }//end 404 alert
       } //end status code
});
});
