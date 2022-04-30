import { Animal } from "./animal"
import { Utilisateur } from "./user"

export class Annonce {
    private _annonceId: number
    private _auteur: Utilisateur
    public get auteur(): Utilisateur {
        return this._auteur
    }
    public set auteur(value: Utilisateur) {
        this._auteur = value
    }

    private _animal: Animal
    public get animal(): Animal {
        return this._animal
    }
    public set animal(value: Animal) {
        this._animal = value
    }
    private _titre: string
    public get titre(): string {
        return `${this.animal.nom} | ${this.animal.age} ans`
        }
    public set titre(value: string) {
        this._titre = value
    }
   
    private _datePublication: string
    public get datePublication(): string {
        return this._datePublication
    }
    public set datePublication(value: string) {
        this._datePublication = value
    }
    
    private _prix: number
    public get prix(): number {
        return this._prix
    }
    public set prix(value: number) {
        this._prix = value
    }
    
    constructor({annonceId, auteur, animal, titre,datePublication,prix}) {
        this._annonceId = annonceId;
        this._auteur = auteur;
        this._animal = animal;
        this._titre = titre;
        this._datePublication = datePublication;
        this._prix = prix;
    }

    

}