import { Admission } from "../models/admission-model";
import admissionsApi from "../api/admissions-api";

// Registrar respuestas
const recordAdmission = async (name, surname, email_address, answers) => {
    const newAdmission = new Admission(name, surname, email_address, answers);
    // Guardar respuestas en la base de datos
    await admissionsApi.recordAdmission(newAdmission);
};

export default {
    recordAdmission
};
