import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ListDemandeRvModel } from '../../models/demande.models';
import { DEMANDES_MOCK} from '../../../../mocks/demande.mock';
import { ListDemandePageModel } from '../../models/demande.models';
import { DemandeService } from '../services/demande.service';
import { DemandeFilterModel } from '../../models/demande.models';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-list-demandes',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './list-demandes.component.html',
  styleUrl: './list-demandes.component.css'
})
export class ListDemandesComponent implements OnInit {
  demandeResponse?:ListDemandePageModel;
  filter: DemandeFilterModel={
    statut: 'En attente',
    specialite: ''
  }
  constructor(private demandeService: DemandeService){}
  
  private loadDemandes(): void {
    this.demandeResponse=this.demandeService.getDemandes(this.filter);
  }
  ngOnInit(): void {
    this.loadDemandes();
  }
  onFilterStatutChange(): void {
    this.loadDemandes();
  }
  onFilterSpecialiteChange(): void {
    this.loadDemandes();
  }
}
