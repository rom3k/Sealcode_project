import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkPreviewComponent } from './talk-preview.component';

describe('TalkPreviewComponent', () => {
  let component: TalkPreviewComponent;
  let fixture: ComponentFixture<TalkPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
