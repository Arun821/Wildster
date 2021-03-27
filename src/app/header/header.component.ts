import { Component, OnInit, EventEmitter, Output, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isVisible = false;

  isSticky: boolean = false;

  @Output() public sidenavToggle = new EventEmitter();
  @HostListener('window:scroll', ['$event'])

  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  public onSidenavOpen = () => {
    this.sidenavToggle.emit();
  }

  openDialog(){
    this.dialog.open(LoginComponent, {
      width: '50%',
      height: '90%'
    });
  }

  showModal(): void{
    this.isVisible = true;
  }

  handleCancel():void{
    this.isVisible = false;
  }

  handleOk(): void{
    this.isVisible = false;
  }
}
