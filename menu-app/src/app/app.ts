import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  activeTab = 'fried';

  tabs = [
    { id: 'fried', labelEn: 'Fried Chicken Meals', labelAr: 'وجبات الدجاج المقلي' },
    { id: 'more', labelEn: 'Rizzo & Sandwiches', labelAr: 'ريزو وساندوتشات' },
  ];

  setTab(id: string) {
    this.activeTab = id;
  }
}
