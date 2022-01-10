function getIncident() {
    
    let incident = new IncidentModel();

    let incidentStore = incident.getName() != "" ? incident.getName() : incident.registerIncident();
    
    incidentStore = JSON.parse( JSON.stringify(incident) );
    return implementsIncident( incidentStore );
}

function implementsIncident(object) {
    const divIncident = document.getElementById('nameIncident');
    divIncident.innerHTML = JSON.stringify(object);
    
}