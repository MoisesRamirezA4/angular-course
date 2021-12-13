import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroesBorrados: string[] = [];

  borrarHeroe() {
    console.log("borrando...");
    let heroeBorrado = this.heroes.pop();
    this.heroesBorrados.push(String(heroeBorrado));
  }

}
