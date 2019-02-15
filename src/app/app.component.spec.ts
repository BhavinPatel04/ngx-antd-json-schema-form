import { TestBed, async, ComponentFixture, inject } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { Router } from "@angular/router";

import { AppComponent } from "./app.component";
import { SharedService } from "src/common/services/shared.service";

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [SharedService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
    router.initialNavigation();
  });

  it("should create the app", () => {
    expect(component).toBeDefined();
  });

  it(`should have as title 'ngx-braebone-app'`, () => {
    expect(component.title).toEqual("ngx-braebone-app");
  });

  it(`should save route data params`, inject([SharedService], (ss: SharedService) => {
    console.log(ss);
    // expect(component.ss.currentRouteParams).toBeDefined();
  }));
});
