fetch('http://localhost/dashboard/phpinfo.php?metodo=getClients')
    .then(response => {
        //throw new Error("New Error Ocurred");
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error)
    });
