import { DenoInfoTemplate, MainLayout } from "../templates.js";

export async function DenoInfoShow() {
  const layoutData = {
    "Body": await DenoInfoTemplate(),
  };

  return MainLayout(layoutData);
}
