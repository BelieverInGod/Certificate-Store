import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateUserListComponent } from './certificate-user-list.component';

describe('CertificateUserListComponent', () => {
  let component: CertificateUserListComponent;
  let fixture: ComponentFixture<CertificateUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateUserListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificateUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
