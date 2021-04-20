import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  @Output() toggleEvent:EventEmitter<void> = new EventEmitter<void>();

  toggle():void {
    this.toggleEvent.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
