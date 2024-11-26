const wellcomeText = document.getElementById("wellcome");

wellcomeText.style.overflow = "hidden";
wellcomeText.style.display = "inline-block";
wellcomeText.style.width = "0";

anime({
  targets: wellcomeText,
  width: [0, wellcomeText.scrollWidth + "px"],
  easing: "easeInOutQuad",
  duration: 3000,
  delay: 500,
  complete: function() {
    wellcomeText.style.overflow = "visible";
  },
});