import { render, fireEvent, screen, waitFor, act } from "@testing-library/react";
import { App } from "../src/app";
import { TestAppI18nProvider } from "@canva/app-i18n-kit";
import { TestAppUiProvider } from "@canva/app-ui-kit";

jest.mock("@canva/platform", () => ({
  requestOpenExternalUrl: jest.fn().mockResolvedValue({ status: "completed" }),
}));

jest.mock("../utils/use_add_element", () => ({
  useAddElement: () => jest.fn().mockResolvedValue(undefined),
}));

describe("App", () => {
  it("renders correctly and handles button clicks", async () => {
    render(
      <TestAppI18nProvider>
        <TestAppUiProvider>
          <App />
        </TestAppUiProvider>
      </TestAppI18nProvider>
    );
    const button = screen.getByText("Do something cool");
    expect(button).toBeTruthy();

    await act(async () => {
        await fireEvent.click(button);
    });

    // Wait for the state update (setIsAddingElement(false)) to finish
    await waitFor(() => {
        expect(button.closest('button')?.getAttribute('aria-disabled')).not.toBe('true');
    });
  });
});
