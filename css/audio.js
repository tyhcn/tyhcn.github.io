// JavaScript Document
var number=true;
var music=document.getElementById("music");
var tb=document.getElementById("tb");
tb.onclick=function()
{
	if(number===false)
		{
			number=true;
			document.getElementById("tb1").style.display="block";
			document.getElementById("tb2").style.display="none";
			music.pause();	 
		}
	else{
			document.getElementById("tb1").style.display="none";
			document.getElementById("tb2").style.display="block";
			number=false;
			music.play();
		}
	};
//©Copyright tyhcn 2023