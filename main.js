
// const httpreq = new XMLHttpRequest();

// httpreq.onload = function(){
//     const myObj = JSON.parse(this.responseText);
//     document.getElementById("demo").innerHTML = myObj.name;
// }
// httpreq.open("GET","main.txt");
// httpreq.send();

// const btn = document.getElementById("btn");
// var para = document.getElementById("para");


// function loadDoc(url,cfunction){
//     const https = new XMLHttpRequest();
//     https.onload =function (){cfunction(this)};
//     https.open("GET",url);
//     https.send();
// }
    
// function myfunction1(){
//     console.log("hello");
// }

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("para").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET","test.txt",true);
    xhttp.send();
  }
