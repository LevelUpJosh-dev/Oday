import { HomeTemplate, MainLayout } from "../templates.js";

export async function HomeShow() {
  const layoutData = {
    "Body": await HomeTemplate(),
  };

  return MainLayout(layoutData);
}
