window.onload = function () {
  if (!(Modernizr.applicationcache && Modernizr.boxshadow && Modernizr.canvas && Modernizr.cssanimations)) {
    var content = document.getElementById("content");
    content.remove();
    var ieTip = document.getElementById("browser_ie");
    ieTip.style.display = "block";
  }
};
