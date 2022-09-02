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
  baseString: any
  reader = new FileReader();
  
  constructor() { }

  ngOnInit(): void {
  }

  getFile(event:any) {
    this.file = event.target.files[0]
    console.log(this.file)
    this.baseString = this.getBase64(this.file)
  }

  parseData() {
    this.result = this.ASN1.decode(this.Hex.decode(this.baseString.split(',')[1])).content();
  }

  getBase64(file:any) {
    this.reader.readAsDataURL(file);
    this.reader.onload = this.getData
    this.reader.onerror = function (error) {
      console.log('Error: ', error);
    };
    this.getData.apply(this.baseString)

    console.log(this.reader.result)

 }

  getData () {
  console.log(this)
  console.log(arguments[0])
  }
}
