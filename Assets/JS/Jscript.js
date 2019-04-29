function changeid ()
{
var e = document.getElementById("a1");
e.id = "onclick-button";
document.getElementById("onclick-button").text = "დამატებულია";
}

function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	//document.getElementById("nav").classList.toggle("change");
	//document.getElementById("menu-bg").classList.toggle("change");

}
