import Swal from "sweetalert2";
import { rootApp } from "../../main";
import usersManager from "../managers/users-manager";
import loginPage from "../pages/login.html?raw";
import { Record } from "./record";
//import { AdmissionForm } from "./admission-form";


export const login = () => {
    rootApp.innerHTML = "";
    rootApp.innerHTML = loginPage;
    
    let email_address = document.querySelector("#email_address");
    let user_name = document.querySelector("#user_name");
    let password = document.querySelector("#password");
    let confirm_password = document.querySelector("#confirm_password");
    let loginForm = document.querySelector("#loginForm");
    let linkRecord = document.querySelector("#linkRecord");
    

    loginForm.onsubmit = async (e) => {
        e.preventDefault();
        console.log(email_address.value);
        console.log(user_name.value);
        console.log(password.value);
        console.log(confirm_password.value);
        const status = await usersManager.loginUser(email.value, user_name.value, password.value, confirm_password.value);
        console.log(status);
        if (status) {
            AdmissionForm();
        } else {
            Swal.fire({
                title: "Email o Contraseña no válido",
            });
        }
    };

    linkRecord.onclick = () => {
        Record();
    };
};
