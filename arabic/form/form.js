$("#contactForm").validator().on("submit", function(event) {
    if (event.isDefaultPrevented()) {
        formError();
    } else {
        event.preventDefault();
        submitForm();
    }
});


function submitForm() {
    // Initiate Variables With Form Content
    var name = $("#form1-1-name").val();
    var phone = $("#form1-2-phone").val();
    var email = $("#form1-3-email").val();
    $.ajax({
        type: "POST",
        url: "form/form.php",
        data: "name=" + name + "&phone=" + phone + "&email=" + email,
        success: function(text) {
           
  
        },
        error: function(){
                formSuccess();
            
        }
    });
}

function formSuccess() {
    $("#contactForm")[0].reset();
    $("#contactForm").removeClass().addClass('bounceOutUp animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
    });
}

function formError() {
    $("#contactForm").removeClass().addClass('wobble animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
    });
}
