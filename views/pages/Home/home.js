import loadJsonFile from "https://deno.land/x/load_json_file@v1.0.0/mod.ts";
import { BaseStyles } from "../../../styles.js";

export default async () => {
  const data = await loadJsonFile("views/pages/Home/home.json");
  const { Footer, Main, NavLinks, Header } = data;

  return `
        <style>
            ${BaseStyles()}
        </style>
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column text-white">
          <img id="logo" src="${Header.Logo.url}" class="my-4 w-25 h-25 mx-auto" alt="logo image">
          <header class="mb-auto">
            <div>
              <h2 class="${Header.Classes}">${Header.PrimaryText}</h2>
              <nav class="my-3 nav nav-masthead justify-content-center float-md-end">
                <a class="nav-link active ${NavLinks.Home.Classes}" aria-current="page" href="${NavLinks.Home.Href}">
                    ${NavLinks.Home.PrimaryText}
                </a>
                <a class="${NavLinks.About.Classes}" href="${NavLinks.About.Href}">
                    ${NavLinks.About.PrimaryText}
                </a>
              </nav>
            </div>
          </header>

          <main class="px-3">
            <h3>${Main.PrimaryText}</h3>
            <p class="lead">${Main.SecondaryText}</p>
          </main>

          <footer class="mt-auto text-white-50">
            <p>${Footer.PrimaryText}</p>
            <p class="text-white-25">${Footer.SecondaryText}</p>
          </footer>
        </div>
    `;
};
