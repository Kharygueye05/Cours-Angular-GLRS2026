import { ListDemandeRvModel } from "../features/private/models/demande.models";

export const DEMANDES_MOCK:ListDemandeRvModel[] = [
    {id:1, date:'2024-07-10', heure:'10:00', typeConsultation:'Consultation Générale', specialite:'Généraliste', statut:'En attente'},
    {id:2, date:'2024-07-12', heure:'14:30', typeConsultation:'Consultation Spécialisée', specialite:'Cardiologie', statut:'Confirmée'},
    {id:3, date:'2024-07-15', heure:'09:00', typeConsultation:'Consultation de Suivi', specialite:'Dermatologie', statut:'Annulée'},
    {id:4, date:'2024-07-17', heure:'11:30', typeConsultation:'Examen Spécialisée', specialite:'Gastro-entérologie', statut:'En attente'},
    {id:5, date:'2024-07-20', heure:'13:00', typeConsultation:'Consultation Générale', specialite:'Généraliste', statut:'En attente'}, 
    {id:6, date:'2024-07-22', heure:'15:00', typeConsultation:'Consultation Spécialisée', specialite:'Cardiologie', statut:'En attente'},
]

