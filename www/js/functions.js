// open and close smartphone menu
function openMenu() {
    var openmenu = document.getElementById("menu");
    openmenu.classList.add("-opensmmenu");
}

function closeMenu() {
    var openmenu = document.getElementById("menu");
    openmenu.classList.remove("-opensmmenu");
}

function showMoreInformationsAboutStatusAdaptation() {
  document.getElementById("showmore").classList.toggle("-show");
  var showbutton = document.getElementById("showbutton");
      if (showbutton.innerHTML !== "Réduire") {
          showbutton.innerHTML = "Réduire";
      } else {
          showbutton.innerHTML = "Plus d'infos";
      }
}
