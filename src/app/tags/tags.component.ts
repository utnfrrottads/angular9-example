import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent {
  @Input() tags: string[] = [];
  @Output() tagSelected = new EventEmitter<string>();

  constructor() {}

  onTagSelected(selectedTag) {
    this.tagSelected.emit(selectedTag);
  }
}
