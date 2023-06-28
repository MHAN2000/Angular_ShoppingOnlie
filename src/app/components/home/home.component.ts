import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: string[] = ["Ejemplo 1", "Ejemplo 2", "Ejemplo 3", "Ejemplo 4"];
}
