class ContactModel{

    name = "";

    registerContact() {
        return new ContactModel(this.name = "Testando");
    }

    getName() {
        return this.name;
    }
}


