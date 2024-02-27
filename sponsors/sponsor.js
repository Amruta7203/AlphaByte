function myFunction(x) {
	//var p = document.getElementsByClassNames("mp");
    
    var p = document.getElementsByClassName("mp");
    var img  = document.getElementById("rulebook_id");


    
  if (x.matches) { // If media query matches
    var j=0;
    for (var i = 0; i < p.length; i++) {
      console.log(p.item(i));
         if(j%2===0)
        {
          // p.item(i).classList.remove("sponsor-light mp");
            p.item(i).style.backgroundColor="#0B1217";
          //  p.item(i).style.backgroundColor="red !important";
        console.log(p.item(i));
        } 	
         else
        { 	
           // p.item(i).classList.add("sponsor-light mp");
             p.item(i).style.backgroundColor="#1a2128";  
            // p.item(i).style.backgroundColor="green !important";
             console.log("light");
        } 
         if(i%2===0)
         {
            // j++;
            j=(j+1)%2;
            //console.log(j+"->"+i);
         }
         console.log(j);
      }

      img.src = "./sponsors/rulebook_mobile.jpg";

  } else {
    for (var i = 0; i < p.length; i++) {
        if(i%2==0)
            p.item(i).style.backgroundColor="#0B1217";
        else
            p.item(i).style.backgroundColor="#1a2128";        
     }
     img.src = "./sponsors/rulebook_desktop.png";
  }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 990px)")

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
  myFunction(x);
});