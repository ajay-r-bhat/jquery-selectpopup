var getSelected = function()
{
	var t = '';
	if(window.getSelection)
	{
		t = window.getSelection();
	}
	else if(document.getSelection){

		t=document.getSelection();
	}
	else if(document.selection)
	{
		t=document.selection.createRange();
	}
	return t;
}


$(document).ready(function(){
	
	$(document).bind("mouseup",mouseup);
});


var mouseup=function(){
		var st = getSelected();
		if(st!='')
	{
	alert("You selected :" +st);
	}
}
