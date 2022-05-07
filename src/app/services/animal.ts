export class Animal {

    private _animalId: number
    private _race: string
    private _genre: string
    private _age: number
    private _nom: string
    private _description: string
    private _lieu: string
    private _caractere: string
    private _poids: number
    private _espece: string
    private _dateDeNaissance: string
    private _carnetDeSante: string
    private _sos: boolean
    private _photo: string
    private _taille: string

    constructor({animalId, race, genre, age, nom, description, poids,taille, espece,dateDeNaissance,caractere,carnetDeSante,lieu,sos,photo}) {
        this._animalId = animalId;
        this._race = race;
        this._genre = genre;
        this._age = age;
        this._nom = nom;
        this._poids = poids;
        this._taille = taille;
        this._espece = espece;
        this._dateDeNaissance = dateDeNaissance;
        this._caractere = caractere;
        this._carnetDeSante = carnetDeSante;
        this._lieu = lieu;
        this._sos = sos;
        this._photo = photo;
    }
    
    public get race(): string {
        return this._race
    }
    public set race(value: string) {
        this._race = value
    }
    
    public get genre(): string {
        return this._genre
    }
    public set genre(value: string) {
        this._genre = value
    }
    
    public get age(): number {
        return this._age
    }
    public set age(value: number) {
        this._age = value
    }
    
    public get nom(): string {
        return this._nom
    }
    public set nom(value: string) {
        this._nom = value
    }
    
    public get description(): string {
        return this._description
    }
    public set description(value: string) {
        this._description = value
    }
    
    public get lieu(): string {
        return this._lieu
    }
    public set lieu(value: string) {
        this._lieu = value
    }
    
    public get caractere(): string {
        return this._caractere
    }
    public set caractere(value: string) {
        this._caractere = value
    }
    
    public get poids(): number {
        return this._poids
    }
    public set poids(value: number) {
        this._poids = value
    }
    
    public get espece(): string {
        return this._espece
    }
    public set espece(value: string) {
        this._espece = value
    }
    
    public get dateDeNaissance(): string {
        return this._dateDeNaissance
    }
    public set dateDeNaissance(value: string) {
        this._dateDeNaissance = value
    }
    
    public get carnetDeSante(): string {
        return this._carnetDeSante
    }
    public set carnetDeSante(value: string) {
        this._carnetDeSante = value
    }
    
    public get sos(): boolean {
        return this._sos
    }
    public set sos(value: boolean) {
        this._sos = value
    }
   
    public get photo(): string {
        return this._photo
    }
    public set photo(value: string) {
        this._photo = value
    }
    
    public get taille(): string {
        return this._taille
    }
    public set taille(value: string) {
        this._taille = value
    }

}