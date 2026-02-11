import { UserModel } from "../core/models/user.model";
export const USERS_MOCK:UserModel[] = [
    {id:1, nomComplet:'Mame Khary Gueye', email:'khary@gmail.com', password:'khary123', role:'patient'},
    {id:2, nomComplet:'Hadja Bah', email:'hadja@gmail.com', password:'hadja123', role:'patient'},
    {id:3, nomComplet:'Dieynaba Bah', email:'dieynaba@gmail.com', password:'dieynaba123', role:'patient'},
    {id:4, nomComplet:'Dr Rokhaya Gueye', email:'rokhaya@gmail.com', password:'rokhaya123', role:'medecin'},
    {id:5, nomComplet:'Dr Cheikh Ahmed', email:'ahmed@gmail.com', password:'ahmed123', role:'medecin'},
    {id:6, nomComplet:'Aminata Ndiaye', email:'aminata@gmail.com', password:'aminata123', role:'secretaire' },
    {id:7, nomComplet:'Khady Adj', email:'khady@gmail.com', password:'khady123', role:'admin' }
]
   