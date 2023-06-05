import { CART_ADD, CART_DELETE } from "./actionTypes";


describe("CART_ADD", () => {

  test("CART_ADD is a string", () => {
    expect(typeof CART_ADD).toEqual("string");
  });

});

describe("CART_DELETE", () => {

  test("CART_DELETE is a string", () => {
    expect(typeof CART_DELETE).toEqual("string");
  });

});