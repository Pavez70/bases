
import { Component, signal} from '@angular/core';

@Component({

  templateUrl: './hero-page.component.html'
})

export class HeroPageComponent  {
name = signal('IronMan');
age = signal(45);

getHeroDescription() {
 return `${this.name()} - ${this.age()}` ;
}
changeHero() {
 this.name.set('Spiderman');
 this.age.set(22);
}
resetForm() {
throw new Error('Method not implemented.');
}

}
