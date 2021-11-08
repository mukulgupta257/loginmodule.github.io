function clicked(id){
    var username=document.getElementById('username').value
    var pass=document.getElementById('password').value
    if(username=='admin'&&pass=='123456789'){
        window.open("./dashboard.html")
    }
    else{
        alert('enter correct combination of username and password')
    }
}