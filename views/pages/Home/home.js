import FooterTemplate from "../../partials/footer.js";
import NavigationTemplate from "../../partials/navigation.js";

export default async () => {
  const { Home, emptyClass } = window.Oday;
  const { Header, Main } = Home;

  return `
        <div class="${Home.classes || emptyClass}">
            ${await NavigationTemplate(Home)}
            <h2>${Header.content.primary}</h2>
            <small>${Header.content.secondary}</small>

          <div class="p-3">
            <a class="${Header.Button.classes}" data-bs-toggle="collapse" data-bs-target="#collapse-section" role="button" aria-expanded="false">
              ${Header.Button.content.primary}
            </a>
          </div>

          <main class="${Home.Main.classes}">
            <div id="collapse-section"  class="card text-dark collapse text-break">
              <div class="card">
                  <div class="card-body">
                    <p class="lead">${Main.content.primary}</p>
                  </div>
                </div>
            </div>
          </main>
          ${await FooterTemplate()}
        </div>
    `;
};
