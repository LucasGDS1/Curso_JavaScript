function getOrganization() {

    let typeOrg = prompt('Write name of your CRM: ');
    
    let organizations = {
        salesforce:  "Your crm is Salesforce",
        oracle: "Your crm is Oracle",
        default: "None crm write"
    };

    return implementsTitleOrg( ( organizations[typeOrg] || organizations.default ) );
}

function implementsTitleOrg(description) {
    const titleOrg = document.getElementById('nameOrg');
    titleOrg.innerHTML = description;
}