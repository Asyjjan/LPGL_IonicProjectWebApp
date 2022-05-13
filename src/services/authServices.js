import { findByUsername } from "./userServices";

export function connect(infos) {
  const { pseudo, mdp } = infos;
  const user = findByUsername(pseudo);
  if (!user) return null;
  if (user.mdp == mdp) return user;
  else return null;
}
