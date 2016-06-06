console.log('hello from js');
$(document).ready(function(){
  console.log('hello from jquery');
});


var index = 0;
var list = " ";
var first;
var last;
var city;
var shoutout;

$(function(){
     $.ajax({
       url: 'https://raw.githubusercontent.com/devjanaprime/2.4-jQueryAjaxJSON/master/students.json',
       dataType: 'json',
       success: function ( data ){
         console.log(' in ajax success' );
         list = data;
         console.log('in ajax function, info is: ' + list );
         first = list.students[index].first_name;
         last = list.students[index].last_name;
         city = list.students[index].city;
         shoutout = list.students[index].shoutout;

         alert('from inside the ajax function ' + first + " " + last + " " + city + " " + shoutout);
          createStudent();
       }, //ends success
       statusCode: {
         404: function() {
           alert('error connecting to server');
         }//end 404 alert
       } //end status code
       });
       });

var createStudent = function(){
         console.log('in createStudent');
                var studentDiv = document.createElement( 'div' );
                studentDiv.id = 'studentDiv';

                  $('#studentDiv').append( "<p id= 'info'> </p>");
                  $('#info').text(list.students[index].first_name + " " + list.students[index].last_name);
                  console.log('in createStudent after the append for index: ' + index);
                  $('.classmateCount').text("(" + Number(index + 1) + "out of 20)");


               var createButtons = document.createElement('div');
               $('#studentDiv').append( "<button id = 'nextStudentButton'> Next </button> <button id = 'studentInfoButton'> Student Info </button> <button id = 'previousStudentButton'> Previous </button>");

                  var studentInfoButton = document.createElement( 'button' );
                  studentInfoButton.id = 'studentInfoButton';
                  studentInfoButton.className = 'studentInfoButton';

                  var previousStudentButton = document.createElement( 'button' );
                  previousStudentButton.id = 'previousStudentButton';
                  previousStudentButton.className = 'previousStudentButton';

                  var refreshButton = function(){
                    $('#nextStudentButton').remove();
                    $('#studentInfoButton').remove();
                    $('#previousStudentButton').remove();
                  };

/// next button works sorta!
                  $('#nextStudentButton').click(function(){
                    console.log('next student button clicked');
                    while (index < list.students.length) {
                      $(console.log(list.students.length));
                      console.log('after removing the parent');
                      index++;
                      console.log('after being incremented in nextstudentbutton, index is: ' + index);
                      refreshButton();
                      createStudent();
                      console.log('end of next student button');
                      return;
                    }//end of next button


///attempt at previous button
                      $('#previousStudentButton').click(function(){
                      console.log('previous student button clicked');
                      if (index < list.students.length) {
                      $(console.log(list.students.length));
                      console.log('after removing the parent');
                      index--;
                      console.log('after being incremented in previousstudentbutton, index is: ' + index);
                      refreshButton();
                      createStudent();
                      console.log('end of previous student button');
                      // return;
                    }

                  });
                });
              };
