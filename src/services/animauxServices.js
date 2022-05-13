import {animaux} from '../assets/data/animaux'
export function findAll() {
  return animaux;
}
export function create(animal) {
  animaux.push(animal);
}
export function destroy(animalId) {}

export function update(animal) {}

export function findById(animalId) {
  const result = animaux.filter((a) => a.animalId === animalId)[0];
  return result;
}

export function findAllPath(path) {
  const especes = new Set(animaux.map((animal) => animal[path]));
  return especes;
}
