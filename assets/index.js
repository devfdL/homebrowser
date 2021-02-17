function startTime() {
   
    var today = new Date();
    var d = today.getDate();
    var M = today.getMonth();
    var y = today.getFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    //h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    var b = M + 1

    var time = h + ":" + m + ":" + s;
    var date = d + " / " + b + " / " + y;

    document.getElementById('time').innerHTML =
    time;   

    //document.getElementById('date').innerHTML = date;   
    var t = setTimeout(startTime, 500);
    
    var nama = "fadhil."

    if (h >= 1 && h <= 4)
        document.getElementById('greet').innerHTML = "Good Nigth, "+nama;
    else if (h >= 4 && h <= 11)
        document.getElementById('greet').innerHTML = "Good Morning, "+nama;
    else if (h >= 12 && h <= 17)
        document.getElementById('greet').innerHTML = "Good Afternoon, "+nama;
    else if (h >= 17 && h <= 21)
        document.getElementById('greet').innerHTML = "Good Evening, "+nama;
    else if (h >= 21 && h <= 24)
        document.getElementById('greet').innerHTML = "Good Night, "+nama;

    //if (h >= 1 && h <= 4)
    //    document.getElementById('msg').innerHTML = "tidur udah malem hehehe";
    //else if (h >= 4 && h <= 11)
    //    document.getElementById('msg').innerHTML = "have a good day yaaaa";
    //else if (h >= 12 && h <= 17)
    //    document.getElementById('msg').innerHTML = "semoga harimu menyenangkan yaa hehehe";
    //else if (h >= 17 && h <= 21)
    //    document.getElementById('msg').innerHTML = "bagaimana hari mu? semoga harimu menyenangkan yaa hehehe";
    //else if (h >= 21 && h <= 24)
    //    document.getElementById('msg').innerHTML = "bagaimana hari mu? jangan tidur malem-malem yaaaa";
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

var i = 0;
var speed = 100000;

function typeWriter(txt) {
  if (i < txt.length) {
    document.getElementById("msg").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


var nodesjs = new NodesJs({
    id: 'nodes',
    width: window.innerWidth,
    height: window.innerHeight,
    particleSize: 2,
    lineSize: 1,
    particleColor: [255, 255, 255, 0.3],
    lineColor: [255, 255, 255],
    backgroundFrom: [0, 0, 0],
    backgroundTo: [0, 0, 0],
    backgroundDuration: 4000,
    nobg: false,
    number: window.hasOwnProperty('orientation') ? 30: 100,
    speed: 20,
    pointerCircleRadius: 150
});

var input = document.getElementById("myText1");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("btn1").click();
  }
});

var input = document.getElementById("myText");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("btn2").click();
  }
});

function gsearch() {
    var search = document.getElementById("myText1").value;
    var myWindow = window.open("https://www.google.com/search?q="+search);
    document.getElementById('myText1').value = '';
    //document.getElementById("link").innerHTML = vid;
}

function ytvid() {
    var vid = document.getElementById("myText").value;
    var myWindow = window.open("https://www.youtube.com/results?search_query="+vid);
    document.getElementById('myText').value = '';
}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
   });
   Webcam.attach( '#my_camera' );
  

  function take_snapshot() {
   
   // take snapshot and get image data
   Webcam.snap( function(data_uri) {
    // display results in page
    document.getElementById('results').innerHTML = 
    '<img src="'+data_uri+'"/>';
    } );
    setTimeout(2000)
    var x = document.getElementById("camBox");
    x.style.display = "none";
  }

  function camBox() {
    var x = document.getElementById("camBox");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }  
