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
    active: boolean,
    toId?: string
  }> = [{
    label: 'Introduction',
    routerLink: [],
    active: false,
    toId: 'intro'
  },{
    label: 'Projects',
    routerLink: [],
    active: false,
    toId: 'projects'
  },
  {
    label: 'Skills',
    routerLink: [],
    active: false,
    toId: 'skills'
  },
{
  label: 'Contact Me',
  routerLink: [],
  active: false,
  toId: 'contactMe'
}];

  constructor() { }

  ngOnInit(): void {
  }

  get imagePath(): string {
    return "assets/header/";
  }

  scrollTo(toId?: string) {
    console.log(toId);
    const element: HTMLElement | null = document.getElementById(toId ?? '');
    const clientTop = element?.offsetTop as number - 94;
    console.log(clientTop);
    window.scrollTo({behavior: 'smooth', top: clientTop });
  }

}
