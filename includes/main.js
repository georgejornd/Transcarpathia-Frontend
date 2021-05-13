

    $(document).ready(function()
    {
        $('.slider').slick();
    });

    function uv_visible1() 
	{
		var x = document.getElementById("uv-unvisible1");
	    if (x.className === "uv-container1") {
	        x.className += " visible";
			document.getElementById("uv_btn1").innerHTML = "Закрити"
	    } else {
	        x.className = "uv-container1";
			document.getElementById("uv_btn1").innerHTML = "Переглянути"
	    }
		
	}

    function uv_visible2() 
	{
		var x = document.getElementById("uv-unvisible2");
	    if (x.className === "uv-container2") {
	        x.className += " visible";
			document.getElementById("uv_btn2").innerHTML = "Закрити"
	    } else {
	        x.className = "uv-container2";
			document.getElementById("uv_btn2").innerHTML = "Переглянути"
	    }
	}

    function uv_visible3() 
	{
		var x = document.getElementById("uv-unvisible3");
	    if (x.className === "uv-container3") {
	        x.className += " visible";
			document.getElementById("uv_btn3").innerHTML = "Закрити"
	    } else {
	        x.className = "uv-container3";
			document.getElementById("uv_btn3").innerHTML = "Переглянути"
	    }
	}

	function uv_visible4() 
	{
		var x = document.getElementById("uv-unvisible4");
	    if (x.className === "uv-container4") {
	        x.className += " visible";
			document.getElementById("uv_btn4").innerHTML = "Закрити"
	    } else {
	        x.className = "uv-container4";
			document.getElementById("uv_btn4").innerHTML = "Переглянути"
	    }
	}

	function uv_visible5() 
	{
		var x = document.getElementById("uv-unvisible5");
	    if (x.className === "uv-container5") {
	        x.className += " visible";
			document.getElementById("uv_btn5").innerHTML = "Закрити"
	    } else {
	        x.className = "uv-container5";
			document.getElementById("uv_btn5").innerHTML = "Переглянути"
	    }
	}

	function uv_visible6() 
	{
		var x = document.getElementById("uv-unvisible6");
	    if (x.className === "uv-container6") {
	        x.className += " visible";
			document.getElementById("uv_btn6").innerHTML = "Закрити"
	    } else {
	        x.className = "uv-container6";
			document.getElementById("uv_btn6").innerHTML = "Записатись"
	    }
	}