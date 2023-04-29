// JavaScript Document
var number=1;
var iframe1=document.getElementById("iframe1");
var iframe2=document.getElementById("iframe2");
var img1=document.getElementById("img1");
var img3=document.getElementById("img3");
var img4=document.getElementById("img4");
img1.onclick=function()
{
   if(number===0)
		{
		document.getElementById("img1").style.display="onshow";
		iframe1.style="display: none";
		iframe2.style="display: none";
		img3.style="display:onshow";
		img4.style="display:onshow";
		}
	else{
		document.getElementById("img1").style.display="none";
		iframe1.style="display: block";
		iframe2.style="display: block";
		img3.style="display:none";
		img4.style="display:none";
		}
	};
