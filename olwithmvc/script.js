function getTypeUser(type) {

    const users = {
        admin: () => "This user is admin",
        default: () => "This default user"
    }

    return (users[type] || users.default)();
}

console.log(getTypeUser('admin'));
console.log(getTypeUser());

