import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkGenericComponent } from './link-generic.component';

describe('LinkGenericComponent', () => {
  let component: LinkGenericComponent;
  let fixture: ComponentFixture<LinkGenericComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkGenericComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
