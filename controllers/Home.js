import { HomeTemplate, MainLayout } from "./Templates.js";

export async function HomeShow() {
  const layoutData = {
    "Body": await HomeTemplate(),
  };

  return MainLayout(layoutData);
}
