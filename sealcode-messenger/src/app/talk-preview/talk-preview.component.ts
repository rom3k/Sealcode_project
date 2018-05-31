import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talk-preview',
  templateUrl: './talk-preview.component.html',
  styleUrls: ['./talk-preview.component.scss']
})
export class TalkPreviewComponent implements OnInit {

  private name: String = 'Bob';
  private messagePreview:String = 'Hello there!';


  constructor() {}

  ngOnInit() {
  }

}
