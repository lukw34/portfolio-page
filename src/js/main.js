import { elementModification } from "./elementModifiaction";

const insertTitle = () => {
    elementModification('title', element => {
        element.append('Web With Ukasz');
    });
};

setTimeout(() => {
    insertTitle();
}, 2000);