import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mocksResList.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
// import { act } from "react-dom/test-utils";
import {act} from "react";



global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("Should search resList for burger text input",async () => {
    await act (async ()=>
        render(
            <BrowserRouter>
              <Body />
            </BrowserRouter>
          )
    );

    const cardsBeforeSearched = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearched.length).toBe(8);
    const searchBtn = screen.getByRole("button",{name: /search/i});
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput,{target: {value: "burger"}})
    fireEvent.click(searchBtn);
    // Screen should have 1 card
    const cards = screen.getAllByTestId("resCard")
    expect(cards.length).toBe(1);
    // console.log(searchInput);
    expect(searchBtn).toBeInTheDocument();

});
it("Should filter top rated restaurant ",async () => {
    await act (async ()=>
        render(
            <BrowserRouter>
              <Body />
            </BrowserRouter>
          )
    );

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(8);
    // Finding top-rated button
    const topRatedBtn = screen.getByRole("button",{name: /Top Restaurants/i})
    expect(topRatedBtn).toBeInTheDocument();
    fireEvent.click(topRatedBtn);
    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(8);

});
