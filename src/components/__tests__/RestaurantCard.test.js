import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render restaurant card Component with props",()=>{
    render(<RestaurantCard resData={MOCK_DATA} />);
    const name = screen.getByText("Anna ka Dosa");
    expect(name).toBeInTheDocument();
});