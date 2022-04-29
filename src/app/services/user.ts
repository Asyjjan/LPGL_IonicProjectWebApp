export class Utilisateur {
    private _utilisateurId: number
    private _pseudo: string
    public get pseudo(): string {
        return this._pseudo
    }
    public set pseudo(value: string) {
        this._pseudo = value
    }
    private _email: string
    public get email(): string {
        return this._email
    }
    public set email(value: string) {
        this._email = value
    }
    private _telephone: number
    public get telephone(): number {
        return this._telephone
    }
    public set telephone(value: number) {
        this._telephone = value
    }
    private _nom: string
    public get nom(): string {
        return this._nom
    }
    public set nom(value: string) {
        this._nom = value
    }
    private _prenom: string
    public get prenom(): string {
        return this._prenom
    }
    public set prenom(value: string) {
        this._prenom = value
    }
    private _addresse: string
    public get addresse(): string {
        return this._addresse
    }
    public set addresse(value: string) {
        this._addresse = value
    }

    
    constructor({utilisateurId, pseudo, email, telephone, nom, prenom}) {
        this._utilisateurId = utilisateurId;
        this._pseudo = pseudo;
        this._email = email;
        this._telephone = telephone;
        this._nom = nom;
        this._prenom = prenom;
    }

}