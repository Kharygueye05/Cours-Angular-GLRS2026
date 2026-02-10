export type specialite = 'Généraliste' | 'Cardiologie' | 'Dermatologie' | 'Gastro-entérologie' //Union de type :literal
export type statut = 'En attente' | 'Confirmée' | 'Annulée'
export interface ListDemandeRvModel{
    id: number;
    date: string;
    heure: string;
    typeConsultation: string;
    specialite:specialite; 
    statut: statut;
}

export interface DemandeFilterModel{
    statut?: statut;
    specialite?: specialite|'';
    page?: number;
    size?: number;
}
export interface ListDemandePageModel{
    data: ListDemandeRvModel[];
    totalpages: number;
    currentpage: number;
    totalitems: number;
    pages: number[];
    size: number;
}