function getContact() {

    let contact = new ContactModel();
    
    let contactStore = contact.getName() != "" ? contact.getName() : contact.registerContact();

    if(contactStore != "") {
        const titleHTML = document.getElementById('nameContact');
        titleHTML.innerHTML = contact.getName();
    }
}
