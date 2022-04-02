import {findByUsername} from './userServices'

export const connect = (infos)=>{
    const {pseudo , mdp} = infos;
    const user = findByUsername(pseudo)
    if(user.mdp == mdp)return true;
    else return false;
}