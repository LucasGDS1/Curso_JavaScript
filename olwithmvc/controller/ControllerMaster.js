function controller() {

    let type = document.getElementById('workspaceType').value;

    const typeWS = {
        org: () => getOrganization(),
        contact: () => getContact(),
        incident: () => getIncident(),
        default: () => "Type undefined"
    }

    return (typeWS[type] || typeWS.default)();
}