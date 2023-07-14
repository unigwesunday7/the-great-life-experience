const form = document.getElementById('form');
const fullnames = document.getElementById('fullnames');
const country = document.getElementById('country');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const popup = document.getElementById('popup');


// form.addEventListener('submit', event => {
//   event.preventDefault();
//  if(validateInputs()){
//   location.href = "home_page.html"
//  }

 form.addEventListener('submit', event => {
  event.preventDefault();

  
 if(validateInputs()){

  popup.classList.add("open-popup");
}

//   else{
//     function closePopup() {
//       popup.classList.remove("open-popup");
//       location.href = "home_page.html"
//     }
//  }

});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};



const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const usernameValue = fullnames.value;
  const countryValue = country.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  let status = false;
  let fullNameStatus = false;
  let countryStatus = false;
  let phoneStatus = false;
  let emailStatus = false;
  let passStatus = false;
  let pass2Status = false;


  
  if(usernameValue === '') {
      setError(fullnames, 'Fullnames are required');
  } else {
      setSuccess(fullnames);
      fullNameStatus = true;
  }

  if(countryValue === 'select country') {
    setError(country, 'Please select country');
  } else {
    setSuccess(country);
    countryStatus = true;
  }

  if(phoneValue === '') {
  setError(phone, 'Phone number is required');
  } else if (phoneValue.length < 10) {
    setError(phone, 'Phone number must be at least 10 digits.');
  } else {
    setSuccess(phone);
    phoneStatus = true;
  }

  if(emailValue === '') {
      setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
      setError(email, 'Provide a valid email address');
  } else {
      setSuccess(email);
      emailStatus = true
  }

  if(passwordValue === '') {
      setError(password, 'Password is required');
  } else if (passwordValue.length < 8 ) {
      setError(password, 'Password must be at least 8 character.');
  } else {
      setSuccess(password);
      passStatus = true;
  }

  if(password2Value === '') {
      setError(password2, 'Please confirm your password');
  } else if (password2Value !== passwordValue) {
      setError(password2, "Passwords doesn't match");
  } else {
      setSuccess(password2);
      pass2Status = true;
  }

  if(fullNameStatus && countryStatus && phoneStatus && emailStatus && passStatus && pass2Status){
    status = true;
}
return status;

};







function country_code() {
    let val = document.getElementById("country").value;

    if (val === "select_country") {
      document.getElementById("phone").value = "";
    }
    else if (val === "ng") {
      document.getElementById("phone").value = "+234";
    }
    else if (val === "gh") {
      document.getElementById ("phone").value = "+233";
    }
    else if (val === "us") {
      document.getElementById ("phone").value = "+1";
    }
    else if (val === "sa") {
      document.getElementById ("phone").value = "+27";
    }
    else if (val === "uk") {
      document.getElementById ("phone").value = "+380";
    }
  }


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
  }

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