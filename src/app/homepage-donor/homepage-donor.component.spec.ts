import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageDonorComponent } from './homepage-donor.component';

describe('HomepageDonorComponent', () => {
  let component: HomepageDonorComponent;
  let fixture: ComponentFixture<HomepageDonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageDonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
