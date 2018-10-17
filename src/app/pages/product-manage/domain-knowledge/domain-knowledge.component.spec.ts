import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainKnowledgeComponent } from './domain-knowledge.component';

describe('DomainKnowledgeComponent', () => {
  let component: DomainKnowledgeComponent;
  let fixture: ComponentFixture<DomainKnowledgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainKnowledgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
