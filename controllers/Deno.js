import { DenoInfoTemplate, MainLayout } from "./Templates.js";

export async function DenoInfoShow() {
  const layoutData = {
    "Body": await DenoInfoTemplate(),
  };

  return MainLayout(layoutData);
}
