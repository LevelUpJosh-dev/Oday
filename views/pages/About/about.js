import loadJsonFile from "https://deno.land/x/load_json_file@v1.0.0/mod.ts";

export default async () => {
    const data = await loadJsonFile("views/pages/About/about.json");
    const homeData = await loadJsonFile("views/pages/Home/home.json");
    const { Main } = data;
    const { Header, NavLinks, Footer } = homeData;

    return `
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <img id="logo" src="${Header.Logo.Url.Png.url}" class="mt-5 mb-2 w-25 mx-auto" alt="logo image" />
          <header class="mb-auto">
            <div>
              <h2 class="${Header.Classes}">${Header.PrimaryText}</h2>
              <nav class="my-3 nav nav-masthead justify-content-center float-md-end text-">
                <a class="nav-link ${NavLinks.Home.Classes}" aria-current="page" href="${NavLinks.Home.Href}">
                    ${NavLinks.Home.PrimaryText}
                </a>
                <a class="active ${NavLinks.About.Classes}" href="${NavLinks.About.Href}">
                    ${NavLinks.About.PrimaryText}
                </a>
              </nav>
            </div>
          </header>
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <main class=" container px-3">
            <div class="row text-dark text-left">
              <div class="col-6">
                <div class="card text-dark text-left">
                    <div class="card-body">
                        <p class="lead">${Main.PrimaryText}</p>
                    </div>
                </div>
              </div>
              <div class="col-6 mt-2">
                <div class="card text-dark text-left">
                    <div class="card-body">
                        <p class="lead">${Main.SecondaryText}</p>
                    </div>
                </div>
              </div>
            </div>
          </main>
        
          <footer class="mt-auto">
            <p>${Footer.PoweredByDeno}</p>
            <p class="maintainer">${Footer.Maintainer}</p>
            <small class="copyright">${Footer.Copyright}</small>
          </footer>
        </div>
    `;
};
