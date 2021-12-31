

var select_messages = function () {

	
	const php = "php/select_messages.php";

	
	const xhr = new XMLHttpRequest();

	
	let formData = new FormData();
	formData.append("chatid",window.localStorage.getItem("chatid"));
	formData.append("chatwith",window.localStorage.getItem("chatwith"));

	
	let itemRaw = [];

	
    xhr.open("POST", php, true);
    xhr.onreadystatechange = function() {
        
    	console.log('readyState: ' + xhr.readyState);
        console.log('status: ' + xhr.status);
        if (xhr.readyState == 4 && xhr.status == 200) {
           
            itemRaw = JSON.parse(xhr.responseText);
			
			let container = document.getElementById('messagesContainer');
			
			container.innerHTML = "";

			
			for (let c in itemRaw) {
				
				console.log(c);

				
				let messageDIV = document.createElement('div');
				let messageContent = document.createElement('p');
				let messageDetails = document.createElement('p');

				if (itemRaw[c].sender == window.localStorage.getItem("chatid")) {
					messageDIV.classList.add("from");
				}

				//Setup links for each user
				messageContent.innerHTML = itemRaw[c].message;
				

				//Dump the message in the container
				messageDIV.appendChild(messageContent);
				messageDIV.appendChild(messageDetails);
				container.appendChild(messageDIV);

			}
        }
	};
	//xhr.send();
	xhr.send(formData);
};
if (window.localStorage.getItem("chatid") == null) {
	window.location.href = "index.html";
}
else if (window.localStorage.getItem("chatwith") == null) {
	window.location.href = "list.html";
}
else {
	select_messages();
}
setInterval(select_messages, 2000);
