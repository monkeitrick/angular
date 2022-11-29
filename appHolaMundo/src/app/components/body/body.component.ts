import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  
  personajes:string[]=['Spiderman','Hulk','Thor','Dardevil'];

  mostrar= true;
  
  frase: any={
    mensaje:'Un gran poder requiere una gran responsabilidad',
    autor:'Ben Parker'
  };
}
