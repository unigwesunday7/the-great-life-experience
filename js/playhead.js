// ========= Nav Links Responsive Toggle ==========
function userToggle() {
  let userProfile = document.getElementById("myTopnav");
  if (userProfile.className === "navLinks") {
    userProfile.className += " responsive";
  } else {
    userProfile.className = "navLinks";
  }
};




// =========== Description Dropdown(Accordion) ===============
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});



// ========== Comment Section ===========
const addComment = document.getElementById('addComment');
const commentContainer = document.getElementById('commentContainer');
const inputComment =document.getElementById('inputComment');

addComment.addEventListener('click', function(){
  let commentWrapper = document.createElement('div');
  commentWrapper.classList.add('comment-wrapper')
})