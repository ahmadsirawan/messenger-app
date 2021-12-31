

var select_users = function () {

	
	const php = "php/select_users.php";

	
	const xhr = new XMLHttpRequest();

	let formData = new FormData();
	formData.append("current",window.localStorage.getItem("chatid"));

	
	let itemRaw = [];

	
    xhr.open("POST", php, true);
    xhr.onreadystatechange = function() {
        
    	console.log('readyState: ' + xhr.readyState);
        console.log('status: ' + xhr.status);
        if (xhr.readyState == 4 && xhr.status == 200) {
            
            itemRaw = JSON.parse(xhr.responseText);
		
			let container = document.getElementById('listContainer');
			
			container.innerHTML = "";

			
			for (let c in itemRaw) {
				
				console.log(c);

				
				let userDIV = document.createElement('div');

				
				userDIV.innerHTML = itemRaw[c].username;
				userDIV.addEventListener("click", function () {
					window.localStorage.setItem("chatwith",itemRaw[c].id);
					window.location.href = "view-messages.html";
				});

				
				container.appendChild(userDIV);

			}
        }
	};
	
	xhr.send(formData);
};
if (window.localStorage.getItem("chatid") == null) {
	window.location.href = "index.html";
}
else {
	select_users();
}
