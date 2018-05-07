const navbar = document.getElementById("navbar");
// const scrollPosY = window.pageYOffset | document.body.scrollTop;
// const scrollPosY = window.pageYOffset | document.body.scrollTop;


document.onscroll = function changeFadeClass(){
  const aboutText = document.querySelector('.about-text');


  if(window.pageYOffset > 100) {
    aboutText.classList.add('hidden');
  } else if(window.pageYOffset <= 100) {
   aboutText.classList.remove('hidden');
}
}

window.onscroll = function changeNavClass(){
  // const navbar = document.querySelector('#navbar');
  const navHeight = navbar.offsetHeight;
  const scrollHeight = window.innerHeight - navHeight;

  if(window.pageYOffset > scrollHeight) {
    navbar.classList.add('nav-scroll');
    navbar.classList.remove('nav-load');

  } else if(window.pageYOffset <= scrollHeight) {
   navbar.classList.remove('nav-scroll');
   navbar.classList.add('nav-load');

}
}

// const burgerNav = document.getElementById('burger-nav');

// burgerNav.onclick = function openNavModal() {
//     const navModal = document.getElementById('nav-modal');

//     navModal.classList.add('nav-modal-active');
//     navModal.classList.remove('nav-modal');
// }

    
    
    
    // window.onscroll = function() {setSticky()}
    // // const navbar = document.getElementsByClassName("navbar")[0];
    // // const navbar = document.getElementById("navbar");
    // const sticky = navbar.offsetTop;

    // function setSticky() {
    //   if (window.pageYOffset >= sticky) {
    //     navbar.classList.add("sticky")
    //   } else {
    //     navbar.classList.remove("sticky");
    //   }
    // }
   
  //  // Cache selectors
  //   var lastId,
  //   topMenu = $("#navbar"),
  //   topMenuHeight = topMenu.outerHeight()+15,
  //   // All list items
  //   menuItems = topMenu.find("a"),
  //   // Anchors corresponding to menu items
  //   scrollItems = menuItems.map(function(){
  //     var item = $($(this).attr("href"));
  //     if (item.length) { return item; }
  //   });

  //   // Bind click handler to menu items
  //   // so we can get a fancy scroll animation
  //   menuItems.click(function(e){
  //     var href = $(this).attr("href"),
  //         offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  //     $('html, body').stop().animate({ 
  //         scrollTop: offsetTop
  //     }, 300);
  //     e.preventDefault();
  //   });
    

  //   // Bind to scroll
  //   $(window).scroll(function(){
  //   // Get container scroll position
  //   var fromTop = $(this).scrollTop()+topMenuHeight;

  //   // Get id of current scroll item
  //   var cur = scrollItems.map(function(){
  //   if ($(this).offset().top < fromTop)
  //     return this;
  //   });
  //   // Get the id of the current element
  //   cur = cur[cur.length-1];
  //   var id = cur && cur.length ? cur[0].id : "";

  //   if (lastId !== id) {
  //     lastId = id;
  //     // Set/remove active class
  //     menuItems
  //       .parent().removeClass("active")
  //       .end().filter("[href='#"+id+"']").parent().addClass("active");
  //   }                   
  //   });