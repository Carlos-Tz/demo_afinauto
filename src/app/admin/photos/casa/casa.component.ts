import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.css']
})
export class CasaComponent implements OnInit {

  @Input() public casa: any;
  constructor() { }

  ngOnInit(): void {
  }

}
