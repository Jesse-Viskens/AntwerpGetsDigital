import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopzoneMapComponent } from './loopzone-map.component';

describe('LoopzoneMapComponent', () => {
  let component: LoopzoneMapComponent;
  let fixture: ComponentFixture<LoopzoneMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopzoneMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopzoneMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
