import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../layout/private/header/header.component';

@Component({
  selector: 'app-private',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './private.component.html',
  styleUrl: './private.component.css'
})
export class PrivateComponent {

}
