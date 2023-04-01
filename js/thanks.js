VANTA.WAVES({
  el: "html",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xbb961c,
  waveHeight: 10.00,
  waveSpeed: 0.65
})




$(document).ready(function () {
  var countdownDiv = document.createElement("div");
  var countdownDate = new Date("July 1, 2023 00:00:00 GMT-0300").getTime();
  document.getElementById("timer").appendChild(countdownDiv);


  setInterval(function () {
    var now = new Date().getTime();
    var timeRemaining = countdownDate - now;

    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    

    // Actualizar el contenido del elemento div con la cuenta regresiva
    countdownDiv.innerHTML = `
    <div class = "center thanks">
    
      <div class="gen-title">
        <h1>GRACIAS</h1>
        <p class="message">
          ¡Te contactaré en breve!
        </p>
      </div>

      <div class="card-container card  row transparent">

        <div class="col s12 m12">EL 1 DE JULIO 2023 LLEGA EN:</div>
        <div class="col s3 m3 item">
          ${days}<div class=""></div>
        </div>

        <div class="col s3 m3 item">
          ${hours}<div class=""></div>
        </div>

        <div class="col s3 m3 item">
          ${minutes}
        </div>
        
        <div class="col s3 m3 item">
          ${seconds}
        </div>


        <div class="col s3 m3 item2 transparent">
          <span class="item-span transparent">DÍAS</span>
        </div>

        <div class="col s3 m3 item2 transparent">
          <span class="item-span transparent">HORAS</span>
        </div>

        <div class="col s3 m3 item2 transparent">
          <span class="item-span transparent">MIN.</span>
        </div>

        <div class="col s3 m3 item2 transparent">
          <span class="item-span transparent">SEG.</span>   
        </div>
        <a href="../index.html" class="btn waves-effect waves-teal hoverable transparent center transparent green-text" id="abrir">VOLVER</a>
      </div>
    `;
  }, 1000); 
});

