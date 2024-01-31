// Registrar Respuestas - Método POST
const recordAdmission = async (admission) => {
    const resp = await fetch("http://localhost:3000/admission", {
        method: "POST",  // Indicamos que va a hacer una petición http POST
        body: JSON.stringify(admission), // En body pasamos los datos que vamos a enviar al la base de datos y lo trasformamos a JSON
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const data = await resp.json();
    console.log(data);
    return data;
}

export default {
    recordAdmission
}