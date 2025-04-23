import { render, screen} from "@testing-library/react";
import RestaurantCard, {withResOpenedLabel} from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { act } from "react";

const RestaurantCardWithLabel = withResOpenedLabel(RestaurantCard);

it("Should render RestaurantCard component with data", ()=>{
render(<RestaurantCard resData={MOCK_DATA}/>);
const name = screen.getByText('Burger King');
expect(name).toBeInTheDocument();
})

it("Should render RestaurantCard component with promted opend label", ()=>{
    render(<RestaurantCardWithLabel resData={MOCK_DATA}/>);
    const label = screen.getByText("Opened");
    expect(label).toBeInTheDocument();
})