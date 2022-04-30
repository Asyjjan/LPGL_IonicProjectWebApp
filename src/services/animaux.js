import animaux from '../assets/data/animaux.json'
export const findAll = () => {
    return animaux;

}
export const create = (animal) => {
    animaux.push(animal)
}
export const destroy = (animalId) => {

}

export const update = (animal) => {

}

export const findById = (animalId) => {
    const result = animaux.filter(a => a.animalId === animalId)[0];
    return result;
}


