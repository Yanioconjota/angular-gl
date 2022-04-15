import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  lang: string = 'en';

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
  }

  changeLang(event: Event) {
    const lang = (event.target as HTMLInputElement).value;
    console.log(lang);
    localStorage.setItem('lang', lang);
    window.location.reload();
  }

}
