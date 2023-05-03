import { TestBed, async } from "@angular/core/testing";
import { StatisticsComponent } from "./statistics.component";

describe("StatisticsComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticsComponent],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(StatisticsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Citi-Bike'`, () => {
    const fixture = TestBed.createComponent(StatisticsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("Citi-Bike");
  });

  it("should render title in a h1 tag", () => {
    const fixture = TestBed.createComponent(StatisticsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      "Welcome to project-journey-to-the-west!"
    );
  });
});
