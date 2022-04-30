import users from '../assets/data/users.json'
export const findAll = ()=>{
    return users;

}
export const create = (user)=>{ // RENVOIE USER CREE OU NULL SI ERREUR
    if(findByUsername(user.pseudo))return null
    user.utilisateurId = users.length+1;
    users.push(user);
    return user;

}
export const destroy = (userId)=>{
    
}

export const update = (userId)=>{

}

export const findByUsername = (username)=>{ 
   const result =  users.filter(u => u.pseudo === username)[0];
   return result;
}

export const findById = (userId)=>{ 
    const result =  users.filter(u => u.utilisateurId === userId)[0];
    return result;
 }
 
