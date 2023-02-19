export const elementModification = (id, modificationCallback) => {
    const element = document.getElementById(id);
    if(element != null) {
        modificationCallback(element);
    } else {
        console.error(`Element with id: ${id} does not exist.`);
    }
}