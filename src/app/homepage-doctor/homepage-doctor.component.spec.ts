import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageDoctorComponent } from './homepage-doctor.component';

describe('HomepageDoctorComponent', () => {
  let component: HomepageDoctorComponent;
  let fixture: ComponentFixture<HomepageDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
