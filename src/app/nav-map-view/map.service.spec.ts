import { TestBed } from "@angular/core/testing";

import { MapService } from "../ride-forecasting/map.service";

describe("MapService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: MapService = TestBed.get(MapService);
    expect(service).toBeTruthy();
  });
});
