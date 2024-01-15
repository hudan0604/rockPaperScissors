import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWraperComponent } from './game-wraper.component';

describe('GameWraperComponent', () => {
  let component: GameWraperComponent;
  let fixture: ComponentFixture<GameWraperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameWraperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameWraperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
