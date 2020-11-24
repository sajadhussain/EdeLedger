
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
    
    document.querySelector('#navbar').style.opecity=0.5;
}
else{
   
    document.querySelector('#navbar').style.opecity=1;
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
        800
        );
    }
});


// $(document).ready(function(){
//     // Add smooth scrolling to all links
//     $("#navbar a, .btn").on('click', function(event) {
  
//       // Make sure this.hash has a value before overriding default behavior
//       if (this.hash !== "") {
//         // Prevent default anchor click behavior
//         event.preventDefault();
  
//         // Store hash
//         var hash = this.hash;
  
//         // Using jQuery's animate() method to add smooth page scroll
//         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//         $('html, body').animate({
//           scrollTop: $(hash).offset().top
//         }, 800, function(){
  
//           // Add hash (#) to URL when done scrolling (default click behavior)
//           window.location.hash = hash;
//         });
//       } // End if
//     });
//   });