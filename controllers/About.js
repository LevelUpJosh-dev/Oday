import { AboutTemplate, MainLayout } from "./Templates.js";

export async function AboutShow() {
  const layoutData = {
    "Body": await AboutTemplate(),
  };

  return MainLayout(layoutData);
}
