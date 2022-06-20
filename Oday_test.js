import { BuildDataModal } from "./helpers/Helpers.js";
import { assert } from "https://deno.land/std@0.144.0/testing/asserts.ts";

Deno.test("Validate Oday Data Modal", async (test) => {
  const OdayModal = await BuildDataModal();
  await test.step("Validate Data Object", () => {
    assert(typeof (OdayModal) === "object");
  });
  await test.step("Validate Bootstrap Resources", () => {
    assert("Bootstrap" in OdayModal.Resources);
  });
});
