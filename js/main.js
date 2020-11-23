
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

// stkicky menu background

window.addEventListener('scroll', function(){
if(window.scrollY > 150){
    document.querySelector('#navbar').getElementsByClassName.opecity=0.5;
}
else{
    document.querySelector('#navbar').getElementsByClassName.opecity=1;
}
});


// Smooth Scrolling

$('#navbar a, .btn').on('click', function(event){
    if(this.hash !==''){
        event.preventDefault();
        const hash =this.hash;
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top -100
        },
        8000
        );
    }
});
