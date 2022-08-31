import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Users } from 'src/app/app.component';

@Component({
  selector: 'app-certificate-user-list',
  templateUrl: './certificate-user-list.component.html',
  styleUrls: ['./certificate-user-list.component.css']
})
export class CertificateUserListComponent implements OnInit {
  @Input() users: Users[] = []
  @Output() onToggleBtn = new EventEmitter<number>()
  @Output() getIdClick = new EventEmitter<number>()

  public btnContent = ['Додати', 'Скасувати'];
  public count = 0;
  public curentId = 0

  constructor() { }

  ngOnInit(): void {
  }

  clickBtnTitle() {
    if(this.count === 0) {
       this.count = this.count + 1
       this.onToggleBtn.emit(this.count)
    }else if (this.count === 1) {
       this.count = this.count - 1
       this.onToggleBtn.emit(this.count)
    }
  }

  getId(id:number) {
    this.getIdClick.emit(id)
    this.curentId = id
  }

}
