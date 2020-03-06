import {Component} from '@angular/core';
import axios from 'axios';
export interface PeriodicElement {
  title: string;
  author: number;
  creationDate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { title: 'Hydrogen', author: 1.0079, creationDate: 'H'},
  { title: 'Helium', author: 4.0026, creationDate: 'He'},
  { title: 'Lithium', author: 6.941, creationDate: 'Li'},
  { title: 'Beryllium', author: 9.0122, creationDate: 'Be'},
  { title: 'Boron', author: 10.811, creationDate: 'B'},
  { title: 'Carbon', author: 12.0107, creationDate: 'C'},
  { title: 'Nitrogen', author: 14.0067, creationDate: 'N'},
  { title: 'Oxygen', author: 15.9994, creationDate: 'O'},
  { title: 'Fluorine', author: 18.9984, creationDate: 'F'},
  { title: 'Neon', author: 20.1797, creationDate: 'Ne'},
];



/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  constructor() { 
    axios.get('http://192.168.1.90:8080/getAllNews').then(response => {
     console.log(response);
  });
  }
  displayedColumns: string[] = ['title', 'author', 'creationDate'];
  dataSource = ELEMENT_DATA;
 
  
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */