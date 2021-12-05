import { Component } from '@angular/core';
import { Person } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {

  soccerTeams = ['Beşiktaş', 'Liverpol', 'Milan'];

  public person: Person = {
    name: 'John Doe',
    age: 20
  };

  // addAquaticCreature(newAquaticCreature) {
  //   this.aquaticCreatures = [...this.aquaticCreatures, newAquaticCreature];
  // }

  addSoccerTeam(newSoccerTeam: string) {
    this.soccerTeams.push(newSoccerTeam);
  }

  public reassign(): void {
    this.person = {
      name: this.person.name,
      age: this.person.age
    };
  }
}
