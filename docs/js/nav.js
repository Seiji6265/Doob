var Aktywne = false;

function NavShow() {
  if (Aktywne) {
    document.getElementById("navmobile").style.display = "none";
    Aktywne = false;
  } else {
    document.getElementById("navmobile").style.display = "flex";
    Aktywne = true;
  }
}