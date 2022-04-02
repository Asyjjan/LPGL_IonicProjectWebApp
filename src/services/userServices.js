const users = [
    {
	utilisateurId: 1,
	pseudo : "", 
	mdp: " ",
	email:"",
	telephone : "",
	nom :"",
	prenom : "",
    }
]

module.exports.findAll = ()=>{
    return users;

}
module.exports.create = (user)=>{
    user.utilisateurId = users.length+1;
    users.push(user);

}
module.exports.delete = (userId)=>{

}
module.exports.update = (userId)=>{

}
module.exports.find = (userId)=>{
    
}