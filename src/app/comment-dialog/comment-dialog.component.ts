import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-comment-dialog',
  templateUrl: './comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.scss'],
})
export class CommentDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { comment: string }) {}

  ngOnInit(): void {}
}
