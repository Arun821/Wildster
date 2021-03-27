import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandicraftComponent } from './handicraft.component';

describe('HandicraftComponent', () => {
  let component: HandicraftComponent;
  let fixture: ComponentFixture<HandicraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandicraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandicraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
