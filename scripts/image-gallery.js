var scrollIndex =  1;
var prevScrollIndex = 1;
var scrollDir;

function galleryScroll(scrollDir){
	// scrollDir represents scroll direction
	// positive to scroll to the right,
	// negative to scroll to the left

	prevScrollIndex = scrollIndex;

	const gallery = document.getElementById('galleryFrame');
	const frames = gallery.children;
	const length = frames.length;
	if ((scrollDir > 0) && (scrollIndex < length)){
		scrollIndex++;
	}else if((scrollDir < 0) && (scrollIndex > 1)){
		scrollIndex--;
	}else if((scrollDir > 0) && (scrollIndex = length)){
		scrollIndex = 1;
	}else if((scrollDir < 0) && (scrollIndex = 1)){
		scrollIndex = length;
	}
	// deubg
	console.log('length = ' + length);
	console.log('scrollIndex = ' + scrollIndex);

	if(scrollIndex != prevScrollIndex){
		//frames[prevScrollIndex - 1].style.flexGrow = 0;
		//frames[prevScrollIndex - 1].style.flexShrink = 1;
		//frames[scrollIndex - 1].style.flexGrow = 1;
		//frames[scrollIndex - 1].style.flexShrink = 0;

		frames[prevScrollIndex - 1].style.width = 0;
		frames[scrollIndex - 1].style.width = '100%';
	}

}