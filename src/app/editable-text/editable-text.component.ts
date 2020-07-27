import { Component, Input, ViewChild, ElementRef, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editable-text',
  templateUrl: './editable-text.component.html',
  styleUrls: ['./editable-text.component.scss']
})
export class EditableTextComponent implements OnChanges {
  @Input() editMode : boolean = false;
  @Input() initialContent : string;

  @Output() contentChanged = new EventEmitter<string>()
  
  @ViewChild('content') contentRef : ElementRef; 


  ngOnChanges(){
    if(this.editMode){
      // Por qué funciona solo de forma asíncrona? Tampoco funciona durante la fase AfterContentInit
      setTimeout(() => this.contentRef.nativeElement.focus(), 0); 
    } 
  }

  onContentChanged(){
    this.contentChanged.emit(this.contentRef.nativeElement.value);
  }
}
