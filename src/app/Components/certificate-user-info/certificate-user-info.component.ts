import { Component, Input, OnInit } from '@angular/core';
import { Users } from 'src/app/app.component';


@Component({
  selector: 'app-certificate-user-info',
  templateUrl: './certificate-user-info.component.html',
  styleUrls: ['./certificate-user-info.component.css']
})
export class CertificateUserInfoComponent implements OnInit {
  @Input() users: Users[] = []
  @Input() flagActiveInfo:number = 0
  @Input() currentId:number = 0
  

  constructor() { }

  ngOnInit(): void {
  }

}
