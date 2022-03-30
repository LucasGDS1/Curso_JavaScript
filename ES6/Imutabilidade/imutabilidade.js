const given = {
    firstName: "Lucas",
    lastName: "Gabriel de Souza"
}

function myImutable() {
    return {
        ...given,
        fullName: `${given.firstName} ${given.lastName}`
    }
}

console.log(myImutable());