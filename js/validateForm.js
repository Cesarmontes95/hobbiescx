$(document).ready(function() {
   
    function validateField(field, errorMessage) {
        if (field.val() === "") {
          if (field.next(".error").length === 0) {
            field.after('<span class="error">' + errorMessage + '</span>');
          } else {
            field.next(".error").text(errorMessage);
          }
          return false;
        } else {
          field.next(".error").remove();
          return true;
        }
      }

      function validateEmail(email) {
        let emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let errorMessage = "Correo inválido"
        if ($("#correo").val() === ""){
            if ($("#correo").next(".error").length === 0) {
                $("#correo").after('<span class="error">Por favor ingrese su correo</span>');
              } else {
                $("#correo").next(".error").text("Por favor ingrese su correo");
              }
              return false;
        }else if (!emailRegex.test(email)){
            if($("#correo").next(".error").length === 0){
                $("#correo").after('<span class="error">' + errorMessage + '</span>');
            }else {
                $("#correo").next(".error").text(errorMessage);
            }
            return false
        }else{
            $("#correo").next(".error").remove();
            return true;
        };
      }
    
      function validatePasswordConfirmation() {
        let pwd = $("#pwd").val();
        let pwdConfirm = $("#pwdConfirm").val();
        let errorMessage = "Las contraseñas no coinciden";
        
        if (pwd === pwdConfirm) {
          $("#pwdConfirm").next(".error").remove();
          return true;
        } else {
          if ($("#pwdConfirm").next(".error").length === 0) {
            $("#pwdConfirm").after('<span class="error">' + errorMessage + '</span>');
          } else {
            $("#pwdConfirm").next(".error").text(errorMessage);
          }
          return false;
        }
      }
    
      function validateForm() {
        let nombreValid = validateField($("#nombre"), "Por favor ingrese su nombre");
        let apellidoValid = validateField($("#apellido"), "Por favor ingrese su apellido");
        let correo = validateEmail($("#correo").val())
        let pwdValid = validateField($("#pwd"), "Por favor ingrese una contraseña");
        let pwdConfirmValid = validatePasswordConfirmation();
        let mensaje = validateField($("#mensaje"), "Por favor escriba su mensaje");
        
        return nombreValid && apellidoValid && correo && pwdValid && pwdConfirmValid && mensaje;
      }
    
      $(".form-control").on("input", function() {
        validateForm();
      });
    
      $("#submit").on("click", function() {
        validateForm()
      });
});
