function getUsers(){
    var _url="https://jsonplaceholder.typicode.com/users";
    fetch(_url)
      .then(response => response.json())
      .then(user => {
        let users=document.getElementById("users");
        user.forEach(element => {
            var _option=document.createElement('option');
            _option.innerHTML=element.name;
            users.appendChild(_option);
            
        });
      })
}