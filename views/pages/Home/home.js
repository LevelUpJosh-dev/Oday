import loadJsonFile from "https://deno.land/x/load_json_file@v1.0.0/mod.ts";
import { BaseStyles } from "../../../styles.js";

export default async () => {
    const data = await loadJsonFile("views/pages/Home/home.json");
    const { Footer, Main, NavLinks, Header } = data;

    return `
        <style>
            ${BaseStyles()}
        </style>
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <img id="logo" src="${Header.Logo.Url.Png.url}" class="mt-5 mb-2 w-25 mx-auto" alt="logo image">
          <div class="header-container">
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
            <h2>Small Fast Measured</h2>
            <small>Curious you should be</small>
          </div>

        <div class="cover-container d-flex w-35 h-100 p-3 mx-auto flex-column">
          <a class="btn btn-primary border-dark" data-toggle="collapse" href="#collapse-section" role="button" aria-expanded="false" aria-controls="collapseExample">
              Click me to learn the story of Oday!
          </a>
        </div>

          <main id="collapse-section" class="px-3 collapse">
            <div class="card text-dark text-left">
              <div class="card-body">
                <p class="lead">${Main.PrimaryText}</p>
              </div>
            </div>
            <p class="alert-success mt-2 p-2">${Main.SecondaryText}</p>
          </main>

          <footer class="mt-auto">
            <p>${Footer.PoweredByDeno}</p>
            <p class="maintainer">${Footer.Maintainer}</p>
            <small class="copyright">${Footer.Copyright}</small>
          </footer>
        </div>
    `;
};
