$(document).ready(() => {
    $("#submit").click(()=>{
        //purposely using GET for creating a security issue
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "/auth?username=" + $('#username').val() + "&password=" + $('#password').val(),
            "method": "GET",
          }
          
          $.ajax(settings).done(function (response) {
              if(response.message == "success"){
                window.location.href = '/dashboard';
              } else {
                $('#errorMessage').css("display", "block");
              }
          });


        
    })
})
 