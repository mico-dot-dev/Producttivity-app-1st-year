function Sub(){

    const Username = document.getElementById('Username').value;
    const Password = document.getElementById('Password').value;
    
    if(Username== 'Stark' && Password== '3000'){
    alert('Welcome');
    window.location.assign('../Project.html');
    }
    
    else{
    alert('User Unknown');
    }

}