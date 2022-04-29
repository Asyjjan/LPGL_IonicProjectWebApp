export class Utilisateur {
    private utilisateurId: number
    private pseudo: string
    private email: string
    private telephone: number
    private nom: string
    private prenom: string
    private addresse: string


    constructor({utilisateurId, pseudo, email, telephone, nom, prenom}) {
        this.utilisateurId = utilisateurId;
        this.pseudo = pseudo;
        this.email = email;
        this.telephone = telephone;
        this.nom = nom;
        this.prenom = prenom;
    }

}