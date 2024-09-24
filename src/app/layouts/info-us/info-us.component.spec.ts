import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUsComponent } from './info-us.component';

describe('InfoUsComponent', () => {
  let component: InfoUsComponent;
  let fixture: ComponentFixture<InfoUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
