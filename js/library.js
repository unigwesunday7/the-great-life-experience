// ========= Nav Links Responsive Toggle ==========
function userToggle() {
    let userProfile = document.getElementById("myTopnav");
    if (userProfile.className === "navLinks") {
      userProfile.className += " responsive";
    } else {
      userProfile.className = "navLinks";
    }
  };



  // ======== Search filter ========
  function search() {
    let filter = document.getElementById('search').value.toUpperCase();
    let item = document.querySelectorAll('.videoCard');
    let l = document.getElementsByTagName('h4');

    for(var i = 0;i<=l.length;i++) {
      let a=item[i].getElementsByTagName('h4')[0];

      let value=a.innerHTML || a.innerText || a.textContent;

      if(value.toUpperCase().indexOf(filter) > -1) {
        item[i].style.display="";
      }
      else {
        item[i].style.display="none";
      }
    }
  }

  function search2() {
    let filter = document.getElementById('search2').value.toUpperCase();
    let item = document.querySelectorAll('.videoCard');
    let l = document.getElementsByTagName('h4');

    for(var i = 0;i<=l.length;i++) {
      let a=item[i].getElementsByTagName('h4')[0];

      let value=a.innerHTML || a.innerText || a.textContent;

      if(value.toUpperCase().indexOf(filter) > -1) {
        item[i].style.display="";
      }
      else {
        item[i].style.display="none";
      }
    }
  }