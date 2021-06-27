import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menus: Array<{
    label: string,
    routerLink: string[],
    active: boolean
  }> = [{
    label: 'Introduction',
    routerLink: [],
    active: false
  },{
    label: 'Projects',
    routerLink: [],
    active: false
  },
{
  label: 'Contact Me',
  routerLink: [],
  active: false
}];

  constructor() { }

  ngOnInit(): void {
  }

  get imagePath(): string {
    return "assets/header/";
  }

}
