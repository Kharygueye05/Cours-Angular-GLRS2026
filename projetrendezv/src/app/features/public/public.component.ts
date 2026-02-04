import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublicHeaderComponent } from '../../layout/public/public-header/public-header.component';

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [RouterOutlet, PublicHeaderComponent],
  templateUrl: './public.component.html',
  styleUrl: './public.component.css'
})
export class PublicComponent {

}
