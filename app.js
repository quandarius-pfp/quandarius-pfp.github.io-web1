let sky=document.getElementById("sky");
let mountain=document.getElementById("mountain");
let fly=document.getElementById("fly");
let nhaydu=document.getElementById("nhaydu");
let sea=document.getElementById("sea");
let ship=document.getElementById("ship");
let ship2=document.getElementById("ship2");
let planes=document.getElementById("planes");
let sky_mountain=document.getElementById("sky-mountain");
let mountain_sky=document.getElementById("mountain-sky");
let air_ballon=document.getElementById("air-ballon");
let air_ballon2=document.getElementById("air-ballon2");
let air_ballon3=document.getElementById("air-ballon3");
let planes3=document.getElementById("planes3");
let planes4=document.getElementById("planes4");


window.addEventListener('scroll',function(){
    var value=window.scrollY;
    sky.style.top=value + 0.5 +'px';
    fly.style.right=value + 0.5 +'px';
    text.style.top=value + 1 +'px';
    nhaydu.style.width=value/15 +'px';
    nhaydu.style.left=value +'px';
    ship.style.width=value-300+'px';
    ship2.style.left=value + 0.1 + 'px';
    planes.style.right=value+ 'px'; 
    air_ballon.style.right=value-1000+'px';
    air_ballon2.style.left=value-1000+'px';
    air_ballon3.style.left=value-1500+'px';
    planes3.style.left=value -1000 +'px';
    planes3.style.width=value -1000 +'px';
    planes4.style.left=value -1000 +'px';
    

})
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }