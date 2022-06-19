import FooterTemplate from "../../partials/footer.js";

export default async () => {
    const Oday = window.Oday;

    return `
        <div class="${Oday.Home.classes}">
          <img id="logo" src="${Oday.Layout.Logo.href}" class="${Oday.Layout.Logo.classes}" alt="${Oday.Layout.Logo.alt}">
          <header class="mb-auto">
          <nav id="${Oday.Layout.Navigation.id}" class="${Oday.Layout.Navigation.classes}">
            <a class="${Oday.Layout.Navigation.content.Home.classes} active" aria-current="page" href="${Oday.Layout.Navigation.content.Home.href}">
                ${Oday.Layout.Navigation.content.Home.content.primary}
            </a>
            <a class="${Oday.Layout.Navigation.content.About.classes}" href="${Oday.Layout.Navigation.content.About.href}">
                ${Oday.Layout.Navigation.content.About.content.primary}
            </a> 
          </nav>
          </header>
        <h2>${Oday.Home.Header.content.primary}</h2>
        <small>${Oday.Home.Header.content.secondary}</small>

        <div class="p-3">
          <a class="btn btn-primary border-dark" data-bs-toggle="collapse" data-bs-target="#collapse-section" role="button" aria-expanded="false">
              Click me to learn the story of Oday!
          </a>
        </div>

          <main class="${Oday.Home.Main.classes}">
            <div id="collapse-section"  class="card text-dark collapse text-break">
              <div class="card">
                  <div class="card-body">
                    <p class="lead">${Oday.Home.Main.content.primary}</p>
                  </div>
                </div>
            </div>
          </main>
          ${await FooterTemplate()}
        </div>
    `;
};
