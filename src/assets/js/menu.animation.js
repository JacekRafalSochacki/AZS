
window.onscroll= function() {
  alerting();
};

function growShrinkLogo() {
  var Logo = document.getElementById("logo");
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    Logo.style.height = '50px';
  } else {
    Logo.style.height = '100px';
  }
}

function alerting() {
  alert("zadzialalo");
}
