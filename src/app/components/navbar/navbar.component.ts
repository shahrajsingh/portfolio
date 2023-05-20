import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  animations: [
    trigger('dropdown', [
      state(
        'down',
        style({
          top: 0,
          opacity: 1,
        })
      ),
      state(
        'up',
        style({
          top: '-100vh',
          opacity: 0,
        })
      ),
      transition('down => up', [animate('0.5s ease-in')]),
      transition('up => down', [animate('0.4s ease-in')]),
    ]),
    trigger('navLinksVisible', [
      state(
        'visible',
        style({
          visibility: 'visible',
          opacity: 1,
          bottom: 'initial'
        })
      ),
      state(
        'hidden',
        style({
          visibility: 'hidden',
          opacity: 0,
          bottom: '20%'
        })
      ),
      transition('hidden => visible', [animate(1000)]),
      transition('visible => hidden', [animate(1000)]),
    ]),
  ],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  mobileMenuVisible: boolean = false;
  onButtonClick(): void {
    const el = document.getElementById(
      'navbar-menu-button'
    ) as HTMLButtonElement;
    el.classList.toggle('active');
    this.mobileMenuVisible = !this.mobileMenuVisible;
  }
}
