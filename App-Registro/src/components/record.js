import { rootApp } from "../../main";
import usersManager from "../managers/users-manager";
import recordPage from "../pages/record.html?raw";
import { login } from "./login";

export const Record = () => {
    rootApp.innerHTML = "";
    rootApp.innerHTML = recordPage;

    let name = document.querySelector("#name");
    let surname = document.querySelector("#surname");
    let brithdate = document.querySelector("#brithdate");
    let age = document.querySelector("#age");
    let address = document.querySelector("#address");
    let phoneNumber = document.querySelector("#phoneNumber");
    let studentId = document.querySelector("#studentId");
    let email_address = document.querySelector("#email_address");
    let password = document.querySelector("#password");
    let formRecord = document.querySelector("#formRecord");

    formRecord.onsubmit = (e) => {
        e.preventDefault();
       const status = usersManager.recordUser(name.value, surname.value, brithdate.value, age.value, address.value, phoneNumber.value, studentId.value, email_address.value, password.value);
        if(status) {
            login();
        }
    }

}