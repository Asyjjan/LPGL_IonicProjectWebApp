import { annonces } from '../assets/data/annonces';
import { users } from '../assets/data/users';
import { messages } from '../assets/data/message';
import { animaux } from '../assets/data/animaux';
import { Animal } from "../src/app/services/animal";
import { User } from "../src/app/services/user"

export class BddService {

    private annonces = Annonce[];
    private users = User[];
    private messages = [];
    private animaux = Animal[];

    constructor() {
        this.annonces = annonces;
        this.users = users;
        this.messages = messages;
        this.animaux = animaux;
    }

    public getAllAnnonces() {
        return this.annonces
    }

    public getAllUsers() {
        return this.users
    }

    public getAllMessages() {
        return this.messages
    }

    public getAllAnimaux() {
        return this.animaux
    }
}