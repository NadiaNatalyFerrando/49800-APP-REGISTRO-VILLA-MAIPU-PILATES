import { v4 as generateID } from "uuid"

export class Admission{
    constructor(id, answers){
        this.id = id;
        this.answers = answers;
    }
}