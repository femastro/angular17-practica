import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsbarComponent } from './toolsbar.component';

describe('ToolsbarComponent', () => {
  let component: ToolsbarComponent;
  let fixture: ComponentFixture<ToolsbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolsbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolsbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
