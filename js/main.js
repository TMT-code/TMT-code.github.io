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

// dang ky luu vao localStorage (keypress nut Enter tu dong chuyen vao trang home.html)
$(document).ready(function(){
  // $(document).keypress(function(event){
  //   event.preventDefault();
  //   var keycode = (event.keyCode ? event.keyCode : event.which);
  //   if(keycode == '13'){
      
  //     var username = $("#username").val();
  //     var pass = $("#password").val();
  //     var cpass = $("#cpassword").val();
  
  //     var user = {
  //       username: username,
  //       password: pass,
  //     }
  
  //     var json = JSON.stringify(user);
  //     if (cpass !== pass){
  //       $("#error-signup").text("Confirm password is incorrect!")
  //       return false;
  //     }
  //     else {
  //       localStorage.setItem(username, json);
  //       alert("Registered is sucessfully! Please login to continue. ");
  //       window.location.href="/html/form/login.html";
  //       return true;
  //     }
  //   }
  // });
  $("#signup").click(function(){
    var username = $("#username").val();
    var pass = $("#password").val();
    var cpass = $("#cpassword").val();

    var user = {
      username: username,
      password: pass,
    }

    var json = JSON.stringify(user);
    if (cpass !== pass){
      $("#error-signup").text("Confirm password is incorrect!")
      return false;
    }
    else {
      localStorage.setItem(username, json);
      alert("Registered is sucessfully! Please login to continue. ");
      window.location.href="/html/form/login.html";
    }
  });
});

// dang nhap luu vao localStorage 

  $(document).ready(function(){
      // $(document).keypress(function(event){
      //   var username= $("#username").val();
      //   var pass= $("#password").val();
      //   var user = localStorage.getItem(username);
      //   var data = JSON.parse(user);
      //   var keycode = (event.keyCode ? event.keyCode : event.which);
      //   if(keycode == '13'){
      //       if(user != null && pass == data.password){
      //         window.location.href = "../navbar2/home.html";
      //       }
      //       else {
      //         $("#error-login").text("Username or password are incorrect!")
      //       }
      //   }
      // });
      $("#login").click(function(){
        var username= $("#username").val();
        var pass= $("#password").val();
        var user = localStorage.getItem(username);
        var data = JSON.parse(user);
        if(user != null && pass == data.password){
          window.location.href = "../navbar2/home2.html";
        }
        else {
          $("#error-login").text("Username or password are incorrect!")
        }
      });
  });

 // form luu vao cookie
  $("#save").click(function(){
    event.preventDefault(); 
    if ($("#phone").val() == ""){
      $("#phone-required").css("display", "block");
    }
    else {
      $.cookie("firstName", $("#firstName").val());
      $.cookie("lastName", $("#lastName").val());
      $.cookie("phone", $("#phone").val());
      $.cookie("email", $("#email").val());
      $.cookie("feedback", $("#feedback").val());
      alert("Your information has been updated");
      window.location.href = 'contact-existed.html';
    }
  });

// xoa noi dung nhap
  $("#clear").click(function() {
    if (confirm('Are you sure?')) {
       $("input[type=text], input[type=email] , #feedback").val('');
    }
    return false;
});

 // show thong tin ca nhan bang cookie
$("#show-profile").click(function(){
  event.preventDefault();
    if($.cookie("phone")== null){
      $("#name").text("Undifined");
      $("#email").text("Undifined");
      $("#phone").text("Undifined");
      $("#feedback").text("Undifined");
    }
    else if ($("#phone").text() =="Undifined" || $("#phone").text() == $.cookie("phone")){
      $("#phone").text("**************");
      $("#name").text("**************");
      $("#email").text("**************");
      $("#feedback").text("**************");
    }
    else { 
      $("#name").text($.cookie("firstName")+" "+$.cookie("lastName"))
      $("#email").text($.cookie("email"));
      $("#phone").text($.cookie("phone"));
      $("#feedback").text($.cookie("feedback"));
    }
});

// an hien password 

$(document).ready(function(){
  $(".fa-eye").click(function(){
   var attr = $(".password").attr("type");
   if(attr == "text"){
    $(".password").attr("type","password");
   }
   else {
    $(".password").attr("type","text");
   }
  });
})


// khong hieu sao lai khong chay

/* $(document).ready(function() {
  $('#edit-profile').click(function() {
    window.location.href = 'contact.html';
  });
});
*/
