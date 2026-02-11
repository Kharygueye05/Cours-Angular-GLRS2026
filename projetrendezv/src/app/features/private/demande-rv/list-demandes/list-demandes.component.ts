import { Component, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
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
export class ListDemandesComponent implements OnInit, OnDestroy {
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
  ngOnDestroy(): void {
    alert('ListDemandesComponent is being destroyed');
  }
  onFilterStatutandSpecialiteChange(): void {
    this.loadDemandes();
  }

  onPageChange(page: number): void {
    this.filter.page = page;
    this.loadDemandes();
  }

  desactiveprecedent(): boolean {
    return !(this.demandeResponse!=undefined && this.demandeResponse.currentpage>1);
  }
  desactivesuivant(): boolean {
    return !(this.demandeResponse!=undefined && this.demandeResponse.currentpage < this.demandeResponse.totalpages);
  }
}
