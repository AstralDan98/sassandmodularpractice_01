const tabLinks = document.querySelectorAll(".tablinks");
const tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});


function openTabs(el) {
   el.preventDefault();
   let btnTarget = el.currentTarget;
   let form = btnTarget.dataset.form;

   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + form).classList.add("active");
   
   btnTarget.classList.add("active");
}