import { Animal } from "./animal"
import { Utilisateur } from "./user"

export class Annonce {

    private _annonceId: number
    private _auteur: Utilisateur
    private _animal: Animal
    private _titre: string
    private _prix: number
    private _datePublication: string
    private _liked: boolean

    constructor({annonceId, auteur, animal, titre, datePublication, prix, liked}) {
        this._annonceId = annonceId;
        this._auteur = auteur;
        this._animal = animal;
        this._titre = titre;
        this._datePublication = datePublication;
        this._prix = prix;
        this._liked = liked;
    }

    public get auteur(): Utilisateur {
        return this._auteur
    }

    public set auteur(value: Utilisateur) {
        this._auteur = value
    }

    public get animal(): Animal {
        return this._animal
    }

    public set animal(value: Animal) {
        this._animal = value
    }
    
    public get titre(): string {
        return `${this.animal.nom} | ${this.animal.age} ans`
    }

    public set titre(value: string) {
        this._titre = value
    }
   
    public get datePublication(): string {
        return this._datePublication
    }

    public set datePublication(value: string) {
        this._datePublication = value
    }
    
    public get prix(): number {
        return this._prix
    }

    public set prix(value: number) {
        this._prix = value
    }

    public get liked(): boolean {
        return this._liked
    }

    public set liked(value: boolean) {
        this._liked = value
    }
}