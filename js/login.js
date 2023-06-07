function iniciarSesion() {

    var usuarioInput = document.getElementById("nombreUsuario");
    var passwordInput = document.getElementById("contraseña");

    var usuario = usuarioInput.value;
    var password = passwordInput.value;


    if (usuario == "admin" && password == "123") { 

        window.open("html\productoras.html"); //Colocar link del menú del administrador entre las comillas/

   
    }else  if (usuario == "gerente" && password == "124") { 

        window.location.href=("html\productoras.html"); //Colocar link del menú del gerente entre las comillas/
        
    
    } else  if (usuario == "cliente" && password == "125") { 

        window.location.href=("html\cartelera.html"); //Colocar link del menú de la secretaria entre las comillas/


    } else if (usuario == "vendedor" && password == "126") { 

        window.location.href=("html\Tickets.html") //Colocar link del menú del vendedor entre las comillas/


    } else {

        alert("Usuario y/o password errado");
        usuarioInput.value = "";
        passwordInput.value = "";
        usuarioInput.focus();


    }
    


}