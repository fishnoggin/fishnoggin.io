var scrollTargetID = 0;

function scrollToID(scrollTargetID){
	document.getElementById(scrollTargetID).scrollIntoView({behavior: "smooth"});
}

function nextPageScroll(){
	window.scrollBy({top: window.innerHeight, behavior: "smooth"});
}