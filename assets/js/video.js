	var vid = document.getElementById("bgvid");
	var pauseButton = document.querySelector("#polina button");
	var videoSource = document.getElementById("video-source");
	var playButton = document.getElementById("play-button");
	var isPlayButtonVisible = true;
	// var videoContainer = document.getElementById

	function vidFade() {
	  vid.classList.add("stopfade");
	}

	vid.addEventListener('ended', function() {
	// only functional if "loop" is removed 
	vid.pause();
	// to capture IE10
	vidFade();
	}); 
	pauseButton.addEventListener("click", function() {
	  vid.classList.toggle("stopfade");
	  if (vid.paused) {
	    vid.play();
	    pauseButton.innerHTML = "<i class='lni-pause'></i>";
	  } else {
	    vid.pause();
	    pauseButton.innerHTML = "<i class='lni-play'></i>";
	  }
	})

	// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 600px)")

// Call listener function at run time
changeVideo(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
  changeVideo(x);
});

function changeVideo(x)
{
	if(x.matches)
	{
		videoSource.src = "./assets/video/anantya_mobile_updated.mp4";
	}
	else
	{
		videoSource.src = "./assets/video/anantya.mp4";
	}
	vid.load();
}

// vid.addEventListener("click",function(){
// 	changePlayButtonVisibility();
// });
function changePlayeButttonVisibility()
{
	if(isPlayButtonVisible)
	{
		playButton.style.visibility="hidden";
		isPlayButtonVisible=false;
	}
	else
	{
		playButton.style.visibility="visible";
		isPlayButtonVisible=true;
	}
	

}