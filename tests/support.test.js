import { expect, it, test, describe } from "vitest";
import { isGeolocationSupported } from "../src/support";

describe("check browser support", () => {
    it('should return if feature is supported into the browser', () => {
        isGeolocationSupported()
    })
})