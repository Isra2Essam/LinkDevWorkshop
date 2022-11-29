import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetialComponent } from './news-detial.component';

describe('NewsDetialComponent', () => {
  let component: NewsDetialComponent;
  let fixture: ComponentFixture<NewsDetialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsDetialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsDetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
