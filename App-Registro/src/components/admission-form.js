import Swal from "sweetalert2";
import { rootApp } from "../../main";
import admissionsManager from "../managers/admissions-manager";
import admissionFormPage from "../pages/admission-form.html?raw";
import { Login } from "./login";

export const AdmissionForm = (email_address) => {

    rootApp.innerHTML = "";
    rootApp.innerHTML = admissionFormPage;
    let admissionFrom = document.querySelector('#formAdmission');


    admissionFrom.onsubmit = async (e) => {
        e.preventDefault();

        let radios = document.querySelectorAll('input[type="radio"]');
        
        let boolRadios = [];

        for (const radio of radios) {
            if (radio.checked) {
              boolRadios.push(radio.value);
            }
          }

        const status = admissionsManager.recordAdmission(email_address, boolRadios);

        console.log(status);
        if (status) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Registro Completo",
                showConfirmButton: false,
                timer: 1500
            });
            Login();
        } else {
            Swal.fire({
                icon: "error",
                title: "ERROR",
                text: "Error, los datos ingresados no son validos"
            });
        };
    };
}


