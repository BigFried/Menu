import { Component } from '@angular/core';
import { MenuGalleryComponent } from './menu-gallery/menu-gallery.component';

@Component({
  selector: 'app-root',
  imports: [MenuGalleryComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
