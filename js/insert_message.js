var insert_message = function() {
   
    const addForm = document.getElementById("messageForm");

    
    addForm.addEventListener('submit', function (event) {
        event.preventDefault();

        
        const php = "php/insert_message.php";

        
        const xhr = new XMLHttpRequest();
        let formData = new FormData(addForm);
        formData.append("chatid",window.localStorage.getItem("chatid"));
        formData.append("chatwith",window.localStorage.getItem("chatwith"));

       
        xhr.open("POST", php, true);
        xhr.onreadystatechange = function () {
            console.log('readyState: ' + xhr.readyState);
            console.log('status: ' + xhr.status);
            if (xhr.readyState == 4 && xhr.status == 200) {
                
                console.log(xhr.responseText);

              
                select_messages();
            }
        };
        xhr.send(formData);
    });
};
insert_message();