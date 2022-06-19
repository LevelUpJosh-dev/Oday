import { BuildDataModal } from "./helpers/helpers.js";
import { assert } from "https://deno.land/std@0.144.0/testing/asserts.ts";

Deno.test("Validate Oday Data Modal", async (test) => {
    const OdayModal = await BuildDataModal();
    await test.step("Validate Data Object", async () => {
        assert(typeof(OdayModal) === "object");
    });
    await test.step("Validate Bootstrap Resources", async () => {
        assert("Bootstrap" in OdayModal.Resources);
    });
});