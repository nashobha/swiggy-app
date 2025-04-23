import { render,screen,fireEvent } from "@testing-library/react"
import {act} from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(()=>
     Promise.resolve({
        json: ()=> Promise.resolve(MOCK_DATA)
    })
);

it("Should load restaurant menu component",async ()=>{
await act(async ()=> render(
    <BrowserRouter>
    <Provider store ={appStore}>
    <Header/>
    <RestaurantMenu/>
    <Cart/>
    </Provider>
    </BrowserRouter>

));

const accordianHeader = screen.getByText("Mango Specials (5)")
fireEvent.click(accordianHeader);

expect(screen.getAllByTestId("foodItems").length).toBe(5);

const addBtns = screen.getAllByRole("button",{name : "Add +"});
expect(screen.getByText("Cart 0")).toBeInTheDocument();

fireEvent.click(addBtns[0]);
expect(screen.getByText("Cart 1")).toBeInTheDocument();
fireEvent.click(addBtns[1]);
expect(screen.getByText("Cart 2")).toBeInTheDocument();

expect(screen.getAllByTestId("foodItems").length).toBe(7);
fireEvent.click(screen.getByRole("button", {name:"Clear Cart"}))
expect(screen.getAllByTestId("foodItems").length).toBe(5);
expect(screen.getByText("Cart is empty, Add items to the cart."))
})