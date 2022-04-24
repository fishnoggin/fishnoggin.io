var sortKey = "cat1"

window.onload = function(){
	filterPosts();
}

function filterPosts(){
	if(sortKey == "all"){
		var nodes = document.getElementById('post-container').children;
		for(var i=0; i<nodes.length; i++) {
			console.log("displayed post-container child #" + i + " of " + nodes.length);
		    nodes[i].style.display = "block";
		}
	}
	else{
		var nodes = document.getElementById('post-container').children;
		for(var i=0; i<nodes.length; i++) {
			console.log("hiding post-container child #" + Number(i +1) + " of " + nodes.length);
		    nodes[i].style.display = "hidden";
		    console.log("post-container child #" + Number(i +1) + " of " + nodes.length + " hidden");
		}
		var nodes = document.getElementsByClassName(sortKey);
		for(var i=0; i<nodes.length; i++) {
			console.log("displayed post-container child #" + i+1 + " of " + nodes.length);
		    nodes[i].style.display = "block";
		}
	}
}