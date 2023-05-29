function togglePW(){
    let password = document.getElementById('password');

    if(password.getAttribute('type')==='password'){
        password.setAttribute('type', 'text');
        document.getElementById('eye').style.color='#fff';
    }
    else {
        password.setAttribute('type', 'password');
        document.getElementById('eye').style.color='#000';
    }
}