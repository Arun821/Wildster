import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Output() public sideNavClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onClose = () => {
    this.sideNavClose.emit();
  }

}
