import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NgxAntdJsonSchemaFormComponent } from "./ngx-antd-json-schema-form.component";
import { NgxAntdJsonSchemaFormModule } from "./ngx-antd-json-schema-form.module";

describe("NgxAntdJsonSchemaFormComponent", () => {
  let component: NgxAntdJsonSchemaFormComponent;
  let fixture: ComponentFixture<NgxAntdJsonSchemaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxAntdJsonSchemaFormModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAntdJsonSchemaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
