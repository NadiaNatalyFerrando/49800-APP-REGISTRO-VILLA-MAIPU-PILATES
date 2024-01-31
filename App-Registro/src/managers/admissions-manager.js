import { Admission } from "../models/admission-model";
import admissionsApi from "../api/admissions-api";

// Registrar respuestas
const recordAdmission = async (email_address, answers) => {
    const newAdmission = new Admission(email_address, answers);
    // Guardar usuario en la base de datos
    await admissionsApi.recordAdmission(newAdmission);
};

export default {
    recordAdmission
};
