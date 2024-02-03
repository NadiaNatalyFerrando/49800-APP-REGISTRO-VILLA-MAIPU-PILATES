import Swal from "sweetalert2";
import { rootApp } from "../../main";
import usersManager from "../managers/users-manager";
import loginPage from "../pages/login.html?raw";
import { Record } from "./record";


export const Login = () => {
    //Llama a la pagina de login y toma los datos de login usuario
    rootApp.innerHTML = "";
    rootApp.innerHTML = loginPage;

    let email_address = document.querySelector("#email_address");
    let user_name = document.querySelector("#user_name");
    let password = document.querySelector("#password");
    let loginForm = document.querySelector("#loginForm");
    let linkRecord = document.querySelector("#linkRecord");

    loginForm.onsubmit = async (e) => {
        e.preventDefault();
        console.log(email_address.value);
        console.log(user_name.value);
        console.log(password.value);
        const status = await usersManager.loginUser(email_address.value, user_name.value, password.value);
        console.log(status);
        if (status) {
            Swal.fire({
                icon: "success",
                title: "BIENVENIDO",
                text: "Serás redirigido a nuestra web",
                showConfirmButton: false,
                timer: 1500
            });
            window.open (window.location.href = "https://villamaipupilates.netlify.app/", "_blank");
        } else {
            Swal.fire({
                icon: "error",
                title: "ERROR",
                text: "Email o Contraseña no válido",
            });
        };
    };
        linkRecord.onclick = () => {
            Record();
        };
}

