import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesTriggerComponent } from './rules-trigger.component';

describe('RulesTriggerComponent', () => {
  let component: RulesTriggerComponent;
  let fixture: ComponentFixture<RulesTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RulesTriggerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RulesTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
