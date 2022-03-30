const myPrimaryPromise = () => 
 new Promise( (resolver, reject) => {
    throw new Error("One error occured");
    setTimeout(() => {
        resolver("He World!");
    }, 1000);
 });

 myPrimaryPromise().then(data => { 
    console.log(data);
 }).catch( error => {
     console.log(error);
 });