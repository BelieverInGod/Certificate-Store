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
  ASN1 = require('@lapo/asn1js');
  Hex = require('@lapo/asn1js/hex');
  file:any
  result:any
  baseString:any
  
  constructor() { }

  ngOnInit(): void {
  }

  getFile(event:any) {
    this.file = event.target.files[0]
    console.log(this.file)
    this.baseString = this.getBase64(event.target.files[0])

    this.result = this.ASN1.decode(this.Hex.decode(this.baseString)).content();
    console.log(this.result)
  }

  getBase64(file:any) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }

 
  

}
