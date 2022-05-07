const annonces = [];

export function findAll() {
    let res;
    annonces.map(a => {
        const annonce = new Annonce(a);
        if (annonce.liked) {
            res.push(annonce)
        }
    })
    return res;
}

export function create(annonce) {
    annonces.push(annonce)
}

export function destroy(annonceId) {

}

export function update(annonce) {
    annonces.map(a => {
        if (annonce.annonceId === a.annonceId) {
            a["auteur"] = annonce["auteur"];
            a["animal"] = annonce["animal"];
            a["titre"] = annonce["titre"];
            a["prix"] = annonce["prix"];
            a["datePublication"] = annonce["datePublication"];
            a["liked"] = annonce["liked"];
        }
    })
}

export function findById(annonceId) {
    const result = annonces.filter(a => a.annonceId === annonceId)[0];
    return result;
}