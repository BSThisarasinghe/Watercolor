// JavaScript Document

//var imageArr = {"IM/2.jpg","IM/3.jpg","IM/1.jpg"};

var imageIndex = 1;

function slideShow(){
	var image = document.getElementById("slide");
	image.src = "IM/"+imageIndex+".jpg";
	imageIndex++;
	setTimeout("slideShow()", 1500);
	if(imageIndex > 3){
		imageIndex = 1;	
	}
}

onload = slideShow;