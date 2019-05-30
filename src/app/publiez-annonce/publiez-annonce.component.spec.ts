import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubliezAnnonceComponent } from './publiez-annonce.component';

describe('PubliezAnnonceComponent', () => {
  let component: PubliezAnnonceComponent;
  let fixture: ComponentFixture<PubliezAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubliezAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubliezAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
