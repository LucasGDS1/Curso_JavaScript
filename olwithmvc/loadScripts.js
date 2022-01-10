function getScripts() {

    let head = document.getElementsByTagName('head')[0];
    
    let pathScriptsServer = [
        'controller/ControllerMaster.js',
        'controller/OrganizationController.js',
        'controller/ContactController.js',
        'controller/IncidentController.js',
        'model/ContactModel.js',
        'model/IncidentModel.js',
    ];
    
    pathScriptsServer.forEach(path => {
        let elementScript = document.createElement('script');
        elementScript.type = 'text/javascript';
        elementScript.src = path;
        head.appendChild(elementScript);
    });
   
}
getScripts();