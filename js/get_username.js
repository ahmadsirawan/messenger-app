

var get_username = function (id,e) {

	
	const php = "php/get_username.php";

	const xhr = new XMLHttpRequest();

	let formData = new FormData();
	formData.append("id",id);

	
	let itemRaw = [];

	
    xhr.open("POST", php, true);
    xhr.onreadystatechange = function() {
        
    	console.log('readyState: ' + xhr.readyState);
        console.log('status: ' + xhr.status);
        if (xhr.readyState == 4 && xhr.status == 200) {
            
            itemRaw = JSON.parse(xhr.responseText);
			

			document.getElementById(e).innerHTML = itemRaw[0].username;
        }
	};
	xhr.send(formData);
};