const users = [];

export function findAll() {
    return users;

}
export function create(user) { // RENVOIE USER CREE OU NULL SI ERREUR
    if (findByUsername(user.pseudo)) return null
    user.utilisateurId = users.length + 1;
    users.push(user);
    return user;

}
export function destroy(userId) {

}

export function update(userId) {

}

export function findByUsername(username) {
    const result = users.filter(u => u.pseudo === username)[0];
    return result;
}

export function findById(userId) {
    const result = users.filter(u => u.utilisateurId === userId)[0];
    return result;
}