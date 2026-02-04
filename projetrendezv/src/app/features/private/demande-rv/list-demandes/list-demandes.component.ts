import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ListDemandeRv } from '../../models/demande.models';

@Component({
  selector: 'app-list-demandes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list-demandes.component.html',
  styleUrl: './list-demandes.component.css'
})
export class ListDemandesComponent {
  demandes: ListDemandeRv[]=[
    {id:1, date:'2024-07-10', heure:'10:00', typeConsultation:'Consultation Générale', specialite:'Généraliste', statut:'En Attente'},
    {id:2, date:'2024-07-12', heure:'14:30', typeConsultation:'Consultation Spécialisée', specialite:'Cardiologie', statut:'Confirmée'},
    {id:3, date:'2024-07-15', heure:'09:00', typeConsultation:'Consultation de Suivi', specialite:'Dermatologie', statut:'Annulée'}  

  ];

}
