import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
     <h1>{{title}}</h1>
     <h2>{{hero.name}} details!</h2>
     <div><label>id: </label>{{hero.id}}</div>
    <div>
    <label>name: </label>
     <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
  id: 1,
  name: 'Windstorm'
};
}
export class Hero {
  id: number;
  name: string;
}
