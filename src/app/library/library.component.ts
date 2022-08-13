import { Component, OnInit } from '@angular/core';
import { book } from '../type/library.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  bookList: book[] = [
    {
      name: 'JavaScript解体新書',
      expired: '2020-01-01',
      languages: 'JavaScript',
    },
    {
      name: 'php解体新書',
      expired: '2020-01-01',
      languages: 'php',
    },
    {
      name: 'java解体新書',
      expired: '2020-01-01',
      languages: 'java',
    },
  ];
}
