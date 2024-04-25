$(document).ready(function () {
  $(window).scroll(function () {
    //  sticky navbar on scroll script  //
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    //  scroll-up button show/hide script  //
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  //  slide-up script  //

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    //  removing smooth scroll on slide-up button click  //
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    //  Smooth scroll on Menu Items click  //

    $("html").css("scrollBehavior", "smooth");
  });

  //  Toggle Navbar  //

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });


  // Define the list of words or phrases for typing effect
  const typingList = ["Web & Graphic Designer", "Social Media Manager", "Social Media Marketer" , "Web Developer"];

  // Function to simulate typing effect
  function simulateTypingEffect() {
    let index = 0;
    const typingElement = document.getElementById("typing");
    setInterval(() => {
      typingElement.textContent = typingList[index];
      index = (index + 1) % typingList.length;
    }, 2000); // Adjust the interval as needed (in milliseconds)
  }

  // Call the function to start the typing effect
  simulateTypingEffect("Web & Graphic Designer", "Social Media Manager", "Social Media Marketer" , "Web Developer");


 
});