import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

// ADDED Smoke and Snapshot Tests.
it("renders Carousel component without crashing", () => {
  // If we dont pass in props, const currCard = photos[currCardIdx]
  // from Carousel.js creates an error and test fails.
  render(<Carousel photos={TEST_IMAGES} title="images for testing" />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<Carousel
                                  photos={TEST_IMAGES}
                                  title="images for testing"/>);

  expect(asFragment()).toMatchSnapshot();
});

// ADDED "should move to next image".
it("should move to next image", () => {
  const { getByTestId, getByText, queryByText } = render(<Carousel
                                  photos={TEST_IMAGES}
                                  title="images for testing"/>);

  const rightBtn = getByTestId('right-button');
  const image1Text = getByText('Image 1 of 3.');
  const image1Cap = queryByText('testing image 1');

  fireEvent.click(rightBtn);
  const leftBtn = getByTestId('left-button');
  fireEvent.click(leftBtn);
  expect(image1Text).toHaveTextContent('Image 1 of 3.');
  expect(image1Cap).toHaveTextContent('testing image 1');
});

// ADDED "should not find left button on first image".
it("should not find left button on first image", () => {
  const { queryByTestId, getByText } = render(<Carousel
                                  photos={TEST_IMAGES}
                                  title="images for testing"/>);

  const image1 = getByText('Image 1 of 3.');
  const leftBtn = queryByTestId('left-button');
  expect(leftBtn).not.toBeInTheDocument();
});

// ADDED "should not find right button on last image".
it("should not find right button on last image", () => {
  const { queryByTestId, getByText } = render(<Carousel
                                  photos={TEST_IMAGES}
                                  title="images for testing"/>);

  const rightBtn = queryByTestId('right-button');
  fireEvent.click(rightBtn);
  fireEvent.click(rightBtn);
  expect(rightBtn).not.toBeInTheDocument();
});

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});
