import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate-user-list',
  templateUrl: './certificate-user-list.component.html',
  styleUrls: ['./certificate-user-list.component.css']
})
export class CertificateUserListComponent implements OnInit {
  btnContent = ['Додати', 'Скасувати']
  count = 0

  constructor() { }

  ngOnInit(): void {
  }

  arrCount() {
    if(this.count === 0) {
       this.count = this.count + 1
    }else if (this.count === 1) {
       this.count = this.count - 1
    }
  }

}
