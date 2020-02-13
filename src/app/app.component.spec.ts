import { AppComponent } from "./app.component";
import { render, RenderComponentOptions } from "@testing-library/angular";

const renderOptions: RenderComponentOptions<AppComponent> = {
  routes: [{ path: "", component: AppComponent }]
};

describe("AppComponent", () => {
  test("should render title", async () => {
    const { getByText } = await render(AppComponent, renderOptions);
    expect(getByText(/angular9-starter/i)).toBeInTheDocument();
  });
});
