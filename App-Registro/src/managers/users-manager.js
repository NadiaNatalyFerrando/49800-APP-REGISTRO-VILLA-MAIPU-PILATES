import { User } from "../models/user-model";
import usersApi from "../api/users-api";

// Registrar un usuario
const recordUser = async (name, surname, brithdate, age, address, phoneNumber, studentId, email_address, password) => {
    const newUser = new User(name, surname, brithdate, age, address, phoneNumber, studentId, email_address, password);
    // Guardar usuario en la base de datos
    await usersApi.recordUser(newUser);
};

// Buscar un usuario por email
const searchUserByEmail = async (email_address) => {
    // Obtenemos todos los usuarios de la base de datos
    let users = await usersApi.getUsers();

    // Buscamos si el usuario con ese mail se encuentra registrado en la base de datos
    let user = users.find((user) => user.email_address === email_address);

    // Retornamos el usuario encontrado
    return user;
};

// Login de usuario
const loginUser = async (email_address, user_name, password, confirm_password) => {
    // Buscamos si existe el usuarios
    let user = await searchUserByEmail(email_address);
    // Si el usuario no existe retornamos false
    if (!user) {
        return false;
    }
    // Verificamos si coinciden las contraseñas
    if (user.password !== password) {
        return false;
    }

    // Guardamos los datos del usuario en el session storage
    sessionStorage.setItem("user", JSON.stringify(user));

    // Retornar los datos del usuario
    return user;
};

export default {
    recordUser,
    loginUser,
};
