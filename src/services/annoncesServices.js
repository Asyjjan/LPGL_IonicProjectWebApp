import annonces from '../assets/data/annonces.json'

export function findAll() {
<<<<<<< HEAD
    return annonces;
=======
 return annonces;

>>>>>>> ae451b8964a613b2b6e679569595bdbbf4d0dd9c
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
<<<<<<< HEAD
    const result = annonces.filter(a => a.annonceId === annonceId)[0];
    return result;
=======
 const result = annonces.filter(a => a.annonceId === annonceId)[0];
 return result;
>>>>>>> ae451b8964a613b2b6e679569595bdbbf4d0dd9c
}