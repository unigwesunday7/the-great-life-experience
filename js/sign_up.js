
let formInput = doc.getElementById('formInput');
let form = document.getElementById('signUp');

form.addEventListener('submit', function(event) {

    
  if (!formInput.value) {
      message1.innerText = "Please enter values in the fields";
      event.preventDefault();
  }


});







function country_code() {
    let val = document.getElementById("country").value;

    if (val === "select_country") {
      document.getElementById("output").value = "";
    }
    else if (val === "ng") {
      document.getElementById("output").value = "+234";
    }
    else if (val === "gh") {
      document.getElementById ("output").value = "+233";
    }
    else if (val === "us") {
      document.getElementById ("output").value = "+1";
    }
    else if (val === "sa") {
      document.getElementById ("output").value = "+27";
    }
    else if (val === "uk") {
      document.getElementById ("output").value = "+380";
    }
  };


  function togglePW1(){
    let password = document.getElementById('password');

    if(password.getAttribute('type')==='password'){
        password.setAttribute('type', 'text');
        document.getElementById('eye').style.color='#fff';
    }
    else {
        password.setAttribute('type', 'password');
        document.getElementById('eye').style.color='#000';
    }
  };

    function togglePW2() {
      let password = document.getElementById('password2');
  
      if(password.getAttribute('type')==='password'){
          password.setAttribute('type', 'text');
          document.getElementById('eye2').style.color='#fff';
      }
      else {
          password.setAttribute('type', 'password');
          document.getElementById('eye2').style.color='#000';
      }
}