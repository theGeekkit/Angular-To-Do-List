import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInputButtonComponent } from './task-input-button.component';

describe('TaskInputButtonComponent', () => {
  let component: TaskInputButtonComponent;
  let fixture: ComponentFixture<TaskInputButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskInputButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskInputButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
