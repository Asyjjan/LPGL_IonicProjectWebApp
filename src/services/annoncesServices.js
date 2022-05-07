import annonces from '../assets/data/annonces.json'
export function findAll() {
 return annonces;

}
export function create(annonce) {
 annonces.push(annonce)
}
export function destroy(annonceId) {

}

export function update(annonce) {

}

export function findById(annonceId) {
 const result = annonces.filter(a => a.annonceId === annonceId)[0];
 return result;
}