$(document).ready(function() {
    var countdownDate = new Date("July 1, 2023 00:00:00").getTime();
    
    setInterval(function() {
      var now = new Date().getTime();
      var timeRemaining = countdownDate - now;
  
      var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      $("#timer").html("Faltan " + days + " días, " + hours + " horas, " + minutes + " minutos y " + seconds + " segundos para el 1 de julio del 2023.");
    }, 1000);
  });
  