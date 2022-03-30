const myPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 1000);
});


const responsePromise = async () => {
    const data = await myPromise();
    return data;
}

responsePromise()
    .then(result => {
        console.log(result);
    });