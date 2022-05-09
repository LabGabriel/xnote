import { v4 as uuidv4 } from "uuid";

const createNote = (title: string) => {
    return {
        id_note: uuidv4(),
        title,
        content: ""
    };
};

export default createNote;