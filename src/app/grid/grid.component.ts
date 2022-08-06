import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

 //select the initial index of carousel and dot
 selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
