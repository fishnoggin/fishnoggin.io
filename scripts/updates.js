document.addEventListener("DOMContentLoaded", footerUpdate());


function footerUpdate(){
	var footer = document.getElementById("footer");
	footer.innerHTML = "<div><span class='narrow'>mason black 2023</span></div>\n" +
	"<div><span class='narrow' style='margin-right: 20px;'> \n" +
	"<a href='../contact.html'>contact</a></span></div>";
}