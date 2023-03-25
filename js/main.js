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
 // dang ky
  function signup(e){
    event.preventDefault();
    var password= document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var block = document.getElementById("notify");
    var cpass = document.getElementById("cpassword").value;
    

    var user = {
      email: email,
      password: password,
      
    };
    var json = JSON.stringify(user);
    if(cpass !== password){
      block.innerHTML="Confirm password is incorrect !";
      return false;
    }

    else {
    localStorage.setItem(email, json);
    alert("Registered is sucessfully! Please login to continue. ");
    window.location.href="/html/form/login.html";

  }
}
// so sanh password
  function compare_password(pass, cpass){
    if(pass !== cpass){
      return false;
    }
    return true;
  }

  function display(){
    var cpass = document.getElementById("cpassword").value;
    var pass= document.getElementById("password").value;
    var block = document.getElementById("notify");

    if(compare_password(pass, cpass) == false){
      document.getElementById("notify").innerHTML="Confirm password is incorrect !";
    }
    else block.innerHTML="";
  }
// dang nhap
  function login(){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var result = document.getElementById("notify");

    var user = localStorage.getItem(email);
    var data = JSON.parse(user);

    if(user != null && pass == data.password){
      window.location.href = "../navbar2/home.html";
    }
    else {
      result.innerHTML = "Email or password are incorrect!";
    }

  }