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

function fill(){
    var selected_user=document.getElementById("users").value;
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        var selected_object=data.find(el=>el.name===selected_user);
        console.log(selected_user);
        console.log(selected_object);
        let _table=document.getElementById("info")
      
        let row=document.createElement("tr");
        row.innerHTML=`
         <td>${selected_object.name}</td>
         <td>${selected_object.username}</td>
        <td>${selected_object.email}</td>
        `
        _table.appendChild(row);
      })
}