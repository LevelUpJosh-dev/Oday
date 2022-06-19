import FooterTemplate from "../../partials/footer.js";
import NavigationTemplate from "../../partials/navigation.js";

export default async () => {
    const Oday = window.Oday;
    const { Home } = Oday;

    return `
        <div class="${Home.classes || Oday.emptyClass}">
        ${await NavigationTemplate(Home)}
        <h2>${Home.Header.content.primary}</h2>
        <small>${Home.Header.content.secondary}</small>

        <div class="p-3">
          <a class="${Home.Button.classes}" data-bs-toggle="collapse" data-bs-target="#collapse-section" role="button" aria-expanded="false">
            ${Home.Button.content.primary}
          </a>
        </div>

          <main class="${Home.Main.classes}">
            <div id="collapse-section"  class="card text-dark collapse text-break">
              <div class="card">
                  <div class="card-body">
                    <p class="lead">${Home.Main.content.primary}</p>
                  </div>
                </div>
            </div>
          </main>
          ${await FooterTemplate()}
        </div>
    `;
};
