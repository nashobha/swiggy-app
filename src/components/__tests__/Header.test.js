import {fireEvent, render, screen} from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// it("Should load header component with a login button",()=>{
//     render(
//     <BrowserRouter>
//     <Provider store = {appStore}>
// <Header/>
//     </Provider>
//     </BrowserRouter>
//     );

//     // const loginButton = screen.getByRole('button');
//     // const loginButton = screen.getByText('Login');
//     // const loginButton = screen.getByRole('button', {name : 'Login'});

//     // expect(loginButton).toBeInTheDocument();

//     const cartItems = screen.getByText("Cart 0");
//     // const cartItems = screen.getByText(/Cart/);

//     expect(cartItems).toBeInTheDocument();
// })

it("Should change login button to logout on click",()=>{
    render(
    <BrowserRouter>
    <Provider store = {appStore}>
<Header/>
    </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole('button', {name: "Login"});
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});
    expect(logoutButton).toBeInTheDocument();
})