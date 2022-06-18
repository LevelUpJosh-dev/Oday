import { AboutTemplate, MainLayout } from "../templates.js";

export async function AboutShow() {
  const layoutData = {
    "Body": await AboutTemplate(),
  };

  return MainLayout(layoutData);
}
