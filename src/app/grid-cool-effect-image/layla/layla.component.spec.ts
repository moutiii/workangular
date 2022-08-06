import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaylaComponent } from './layla.component';

describe('LaylaComponent', () => {
  let component: LaylaComponent;
  let fixture: ComponentFixture<LaylaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaylaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaylaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
