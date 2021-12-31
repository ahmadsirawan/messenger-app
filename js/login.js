const login = function() {
    
    const loginForm = document.getElementById("loginForm");

    
    let itemRaw = [];

    
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const php = "php/login.php";

        
        const xhr = new XMLHttpRequest();
        let formData = new FormData(loginForm);

        xhr.open("POST", php, true);
        xhr.onreadystatechange = function () {
            console.log('readyState: ' + xhr.readyState);
            console.log('status: ' + xhr.status);
            if (xhr.readyState == 4 && xhr.status == 200) {
                itemRaw = JSON.parse(xhr.responseText);

                itemRaw = JSON.parse(xhr.responseText);
                console.log(itemRaw); // print response

               
                window.localStorage.setItem('chatid',itemRaw[0].id);
                window.localStorage.setItem('chatusername',itemRaw[0].username);

                //Navigate to the list of users
                window.location.href = "list.html";
            }
        };
        xhr.send(formData);
    });
};
if (window.localStorage.getItem("chatid") == null) {
    login();
}
else {
    window.location.href = "list.html";
}