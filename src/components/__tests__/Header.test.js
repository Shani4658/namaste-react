import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
it("Should load Header Component with a Login Button",() => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name:"login" });
    expect (loginButton).toBeInTheDocument();
});
it("Should load Header Component with cart item 0",() => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    // For Particular cart intialization "Cart(0 items"
    const cartItems = screen.getByText("Cart(0 items)");
    expect(cartItems).toBeInTheDocument(); 

    // For checking only if cart is there or not
    const cartItem = screen.getByText(/Cart/);
    expect(cartItem).toBeInTheDocument(); 
});
it("Should change login button to logout on click",() => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button",{name:/login/i});
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole("button",{name:/logout/i});
    expect(logoutButton).toBeInTheDocument();
});
