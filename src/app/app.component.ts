import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface Users {
  name: string,
  id: number,
  CN: string,
  Form: string,
  Till: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public users: Users[] = [
    {name: "Іванов Іван Іваонович", id: 1, CN: 'АЦСК MASTERKEY', Form: '2016-12-18', Till: '2017-12-18'},
    {name: "Петров Петро Петрович", id: 2, CN: 'ЦСК ПрАТ "ІВК"', Form: '2016-09-06', Till: '2017-09-06'},
    {name: 'Дмитров Дмитро Дмитрович', id: 3, CN: 'КНЕДП ІДД ДПС', Form: '2017-03-25', Till: '2018-03-25'}
  ];
  public flagActiveInfo: number = 0;
  public currentId: number = 0

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
  }
  
  onToggleBtn(count:number) {
    this.flagActiveInfo = count
    this.currentId = 0
  }

  getIdClick(id:number) {
    this.currentId = id
  }

  // setLimit(prevLimit: string = '') {
  //   this.limit = prevLimit;
  // }

  // addPagination() {
  //   this.pagination++
  //   this.http.get(`https://api.thecatapi.com/v1/images/search?api_key=6a109865-cc33-4e06-882a-d3cced0b56f5&limit=${this.limit}&breed_ids=${this.value}&page=${this.pagination}` )
  //   .subscribe(( catsListPaginaton ) => {
  //     this.catsList = this.catsList.concat(catsListPaginaton)
  //   })
  // }

  // setValue(prevValue: string= '') {
  //   this.value = prevValue;
  // }

  // search() {
  //   this.http.get(`https://api.thecatapi.com/v1/images/search?api_key=6a109865-cc33-4e06-882a-d3cced0b56f5&limit=${this.limit}&breed_ids=${this.value}` )
  //   .subscribe(( catsList ) => {
  //     this.catsList = catsList;
  //   })
  // }
}
