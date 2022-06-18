import FooterTemplate from "../../partials/footer.js";

export default async () => {
    const Oday = window.Oday;

    return `
        <div class="${Oday.Home.classes || Oday.emptyClass}">
          <img src="${Oday.Layout.Logo.href}" class="${Oday.Layout.Logo.classes}" alt="${Oday.Layout.Logo.alt}" />
          <header class="">
            <div>
              <nav class="${Oday.Layout.Navigation.classes}">
                <a class="nav-link ${Oday.Layout.Navigation.content.Home.classes}" aria-current="page" href="${Oday.Layout.Navigation.content.Home.href}">
                    ${Oday.Layout.Navigation.content.Home.content.primary}
                </a>
                <a class="active ${Oday.Layout.Navigation.content.About.classes}" href="${Oday.Layout.Navigation.content.About.href}">
                    ${Oday.Layout.Navigation.content.About.content.primary}
                </a>
              </nav>
            </div>
          </header>
          <main class=" container px-3">
            <div class="p-2 row text-dark text-left">
              <div class="col-6">
                <div class="card text-dark text-left">
                    <div class="card-body">
                        <p class="lead">${Oday.About.Main.content.primary}</p>
                    </div>
                </div>
              </div>
              <div class="col-6">
                <div class="card text-dark text-left">
                    <div class="card-body">
                        <p class="lead">${Oday.About.Main.content.secondary}</p>
                    </div>
                </div>
              </div>
            </div>
          </main>

          ${await FooterTemplate()}
    `;
};
