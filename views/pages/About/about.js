import loadJsonFile from "https://deno.land/x/load_json_file@v1.0.0/mod.ts";

export default async () => {
  const data = await loadJsonFile("views/pages/About/about.json");
  const homeData = await loadJsonFile("views/pages/Home/home.json");
  const { Main } = data;
  const { Header, NavLinks, Footer } = homeData;

  return `
        <meta name="theme-color" content="#7952b3"/>
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column text-white">
          <img id="logo" src="${Header.Logo.url}" class="rounded my-4 w-25 h-25 mx-auto" alt="logo image" />
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
          <main class="px-3">
            <p class="lead">${Main.PrimaryText}</p>
            <p>${Main.SecondaryText}</p>
          </main>
        
          <footer class="mt-auto text-white-50">
            <p>${Footer.PrimaryText}</p>
            <p class="text-white-25">${Footer.SecondaryText}</p>
          </footer>
        </div>
    `;
};
