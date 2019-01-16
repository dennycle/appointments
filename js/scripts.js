$(document).ready(function() {
  $("#appointmentForm").submit(function(event) {
    var name = $("input#name").val();
    var appointmentDetail = $("input#description").val();
    var appointmentDate = $("input#date").val();
    var startTime = $("input#start").val();
    var endTime = $("input#end").val();

    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
    modal.style.display = "block";
    }
    span.onclick = function() {
    modal.style.display = "none";
    }
    window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      }
    }

    $(".name").text(name);
    $(".description").text(appointmentDetail);
    $(".date").text(appointmentDate);
    $(".start").text(startTime);
    $(".end").text(endTime);


    $(".modal-content").show();

    event.preventDefault();
  });
});
