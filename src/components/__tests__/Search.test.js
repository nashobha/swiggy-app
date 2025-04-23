import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})
it("Should render the body component", async ()=>{
    await act(async () =>
        render(
          <BrowserRouter>
            <Body/>
          </BrowserRouter>
        )
      );


// const searchBtn = screen.getByRole('button', {name:"Search"});
// const searchInput = screen.getByTestId("searchInput");

// fireEvent.change(searchInput,{target: {value : "Burger"}});
// fireEvent.click(searchBtn);

// const cardsBeforeSearch = screen.getAllByTestId('resCard')

// expect(cardsBeforeSearch.length).toBe(4);

// const topRated = screen.getByRole('button', {name :"Top rated Restaurants"});
// fireEvent.click(topRated);
})