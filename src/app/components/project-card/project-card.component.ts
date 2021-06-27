import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() projectImg: string | undefined;
  @Input() projectIntro: string | undefined = 'intro';
  @Input() imagePosition: 'left' | 'right' = 'left';
  @Input() projectTitle: string | undefined = 'Project One';
  constructor() { }

  ngOnInit(): void {
  }

}
