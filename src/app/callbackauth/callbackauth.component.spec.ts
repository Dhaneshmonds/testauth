import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackauthComponent } from './callbackauth.component';

describe('CallbackauthComponent', () => {
  let component: CallbackauthComponent;
  let fixture: ComponentFixture<CallbackauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallbackauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbackauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
