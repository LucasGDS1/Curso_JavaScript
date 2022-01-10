class IncidentModel {

    name = "";
    dataCreated = null;

    registerIncident() {
        return new IncidentModel(this.name = "Test open", this.dataCreated = new Date());
    }

    getName() {
        return this.name;
    }

    getDataCreated() {
        return this.dataCreated;
    }

    getIncident() {
        return { "name" : this.name, "dataCreated": this.dataCreated };
    }
}