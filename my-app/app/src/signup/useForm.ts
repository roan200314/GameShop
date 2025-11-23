//get form data
//check if valid
//send to backend
import type { SignUp } from "../../domain/Registration";
import type { FormEvent } from "react";

function isValid(data: SignUp) {
    const errors: string[] = [];

    if (!data.email.includes("@")) {
        errors.push("Email is niet geldig.");
    }

    if (data.password.length < 6) {
        errors.push("Wachtwoord moet minimaal 6 karakters zijn.");
    }

    if (data.password !== data.repeatPassword) {
        errors.push("Wachtwoorden komen niet overeen.");
    }

    return errors;
}

export async function getForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries()) as unknown as SignUp;

    console.log("Form data = ", data);

    const errors = isValid(data);
    if (errors) {
        console.error("Validatie errors:", errors);
        console.log(errors.join("/n"))
        return;
    } else {
        console.log("Registratie succesvol");
    }
}