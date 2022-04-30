import animaux from '../assets/data/animaux.json'
export function findAll (){
    return animaux;

}
export function create (animal)  {
    animaux.push(animal)
}
export function destroy (animalId)  {

}

export function update (animal) {

}

export function findById(animalId) {
    const result = animaux.filter(a => a.animalId === animalId)[0];
    return result;
}


