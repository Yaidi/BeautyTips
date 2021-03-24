import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link-generic',
  templateUrl: './link-generic.component.html',
  styleUrls: ['./link-generic.component.sass']
})
export class LinkGenericComponent implements OnInit {
  public goToLink(): void {
    window.open(this.link.toString());
  }
  @Input() link: string = 'google.com';
  @Input() text: string ='google';
  constructor() { 
 
  }

  ngOnInit(): void {
  
  }

}
