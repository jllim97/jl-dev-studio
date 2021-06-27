import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss']
})
export class SectionContainerComponent implements OnInit {
  @Input('title') sectionTitle: string | undefined;
  @Input() alignPosition: 'top'|'bottom'|'center' = 'center';
  constructor() { }

  ngOnInit(): void {
  }

}
