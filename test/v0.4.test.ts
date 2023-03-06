import { describe, expect, test } from "vitest";
import * as schemas from "../src/0.4";
import { gather_test_cases } from "./utils";

let cases = await gather_test_cases("0.4", schemas);

describe.each(cases)("$description - $schema.id", ({ Schema, tests }) => {
  test.each(tests)("$formerly", ({ data, valid }) => {
    expect(Schema.safeParse(data).success).toBe(valid);
  });
});
