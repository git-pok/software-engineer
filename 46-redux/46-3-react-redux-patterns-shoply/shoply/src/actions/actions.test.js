import { addToCart, deleteFromCart } from "./actions";
import { CART_ADD, CART_DELETE } from "./actionTypes";


const testItem = {
  "id": "47314fa1-ae56-4eae-80be-af6691145951",
  "name": "tv",
  "price": 219.99,
  "description": "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
  "image_url": "https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue",
  "qty": 0
};

const testItemId = "47314fa1-ae56-4eae-80be-af6691145951";


describe("addToCart()", () => {

  test("is a function", () => {
    expect(typeof addToCart).toEqual("function");
  });

  test("return Redux action with item object and type", () => {
    const action = addToCart(testItem);
    expect(action).toEqual({
      type: CART_ADD,
      item: testItem
    });
  });

});

describe("deleteFromCart()", () => {

  test("deleteFromCart() is a function", () => {
    expect(typeof deleteFromCart).toEqual("function");
  });

  test("return Redux action with id and type", () => {
    const action = deleteFromCart(testItemId);
    expect(action).toEqual({
      type: CART_DELETE,
      id: testItemId
    });
  });

});
