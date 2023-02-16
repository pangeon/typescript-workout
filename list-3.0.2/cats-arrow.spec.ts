import {capitalize} from "../3.0.3/cats-arrow";

describe("test suite for `sentence`", () => {
    test("capitalize", () => {
        expect(capitalize("HELLO")).toBe("Hello");
    });
});