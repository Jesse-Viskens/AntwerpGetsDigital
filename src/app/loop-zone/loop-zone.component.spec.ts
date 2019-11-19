import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopZoneComponent } from './loop-zone.component';

describe('LoopZoneComponent', () => {
  let component: LoopZoneComponent;
  let fixture: ComponentFixture<LoopZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
