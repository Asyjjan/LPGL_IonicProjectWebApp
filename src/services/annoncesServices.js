import annonces from '../assets/data/annonces.json'
export const findAll = () => {
    return annonces;

}
export const create = (annonce) => {
    annonces.push(annonce)
}
export const destroy = (annonceId) => {

}

export const update = (annonce) => {

}

export const findById = (annonceId) => {
    const result = annonces.filter(a => a.annonceId === annonceId)[0];
    return result;
}


