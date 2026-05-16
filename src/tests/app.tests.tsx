import { TestAppUiProvider } from "@canva/app-ui-kit";
import { TestAppI18nProvider } from "@canva/app-i18n-kit";
import type { RenderResult } from "@testing-library/react";
import { fireEvent, render, act } from "@testing-library/react";
import { App } from "../app";
import { useAddElement } from "utils/use_add_element";

jest.mock("utils/use_add_element", () => ({
  useAddElement: jest.fn(),
}));

function renderInTestProvider(node: React.ReactNode): RenderResult {
  return render(
    <TestAppI18nProvider>
      <TestAppUiProvider>{node}</TestAppUiProvider>
    </TestAppI18nProvider>,
  );
}

describe("App", () => {
  it("shows loading state when clicking 'Do something cool'", async () => {
    let resolveAddElement: () => void = () => {};
    const addElementPromise = new Promise<void>((resolve) => {
      resolveAddElement = resolve;
    });

    const mockAddElement = jest.fn().mockReturnValue(addElementPromise);
    jest.mocked(useAddElement).mockReturnValue(mockAddElement);

    const result = renderInTestProvider(<App />);
    const button = result.getByRole("button", { name: "Do something cool" });

    // Initial state: not loading
    expect(button.getAttribute("aria-disabled")).toBeNull();

    // Click button
    await act(async () => {
      await fireEvent.click(button);
    });

    // State: loading
    expect(button.getAttribute("aria-disabled")).toBe("true");

    // Resolve promise
    await act(async () => {
      resolveAddElement();
    });

    expect(button.getAttribute("aria-disabled")).toBeNull();
  });
});
