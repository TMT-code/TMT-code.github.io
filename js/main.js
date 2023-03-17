// them ki tu active de danh dau trang
function active(name){
    var at = document.getElementById("iframe");
    var ifr = at.contentWindow.document.getElementById(name);
    ifr.classList.add("active");
}
// chuyen trang web iframe
function move(path){
    window.parent.location.href = path;
}

function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }