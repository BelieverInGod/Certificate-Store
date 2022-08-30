import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateUserInfoComponent } from './certificate-user-info.component';

describe('CertificateUserInfoComponent', () => {
  let component: CertificateUserInfoComponent;
  let fixture: ComponentFixture<CertificateUserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateUserInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificateUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
