


var insert_user = function() {
    
    const addForm = document.getElementById("signupForm");

    
    addForm.addEventListener('submit', function (event) {
        event.preventDefault();

        
        const php = "php/insert_user.php";

        
        const xhr = new XMLHttpRequest();
        let formData = new FormData(addForm);

        
        xhr.open("POST", php, true);
        xhr.onreadystatechange = function () {
            console.log('readyState: ' + xhr.readyState);
            console.log('status: ' + xhr.status);
            if (xhr.readyState == 4 && xhr.status == 200) {
                
                console.log(xhr.responseText);

                
                addForm.innerHTML = window.location.href = "login.html";
                
            }
        };
        xhr.send(formData);
    });
};

insert_user();


