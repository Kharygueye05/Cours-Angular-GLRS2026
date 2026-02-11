import { Injectable } from '@angular/core';
import { DEMANDES_MOCK } from '@mocks';
import { DemandeFilterModel } from '../../models/demande.models';
import { ListDemandePageModel } from '../../models/demande.models';
import { environment } from '../../../../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor() { }
  public getDemandes(filterDemande: DemandeFilterModel):ListDemandePageModel{
    let demandes=[...DEMANDES_MOCK];
    if (filterDemande.statut){
      demandes=demandes.filter(d=>d.statut===filterDemande.statut);
    }
    if (filterDemande.specialite){
      demandes=demandes.filter(d=>d.specialite===filterDemande.specialite);

    }
    const page=filterDemande.page ||1;
    const size=filterDemande.size || environment.limit || 2;
    const startIndex=(page-1)*size;
    const endIndex=startIndex+size;
    const totalPages=Math.ceil(demandes.length/size);
    const pages:number[]=Array.from({length: totalPages}, (_,i)=>i+1);

    const demandebyPages=demandes.slice(startIndex,endIndex);
     
    return {
      data: demandebyPages,
      totalpages: totalPages,
      currentpage:page,
      totalitems: demandes.length,
      pages: pages,
      size: size
    };
    }

}

