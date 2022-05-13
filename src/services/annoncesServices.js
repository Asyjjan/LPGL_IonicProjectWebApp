import { annonces } from "../assets/data/annonces";

export function findAll() {
  return annonces;
}

export function create(annonce) {
  annonces.push(annonce);
}

export function destroy(annonceId) {}

export function update(annonce) {
  annonces.forEach((a) => {
    if (a.annonceId === annonce._annonceId) {
      a.liked = annonce._liked;
    }
  });
}

export function findById(annonceId) {
  const result = annonces.filter((a) => a.annonceId === annonceId)[0];
  return result;
}
