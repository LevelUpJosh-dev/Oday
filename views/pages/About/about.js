import FooterTemplate from "../../partials/footer.js";
import NavigationTemplate from "../../partials/navigation.js";

export default async () => {
  const { About, emptyClass } = window.Oday;

  return `
        ${await NavigationTemplate(About)}

        <div class="${About.classes || emptyClass}">
          <main class=" container px-3">
            <div class="p-2 row text-dark text-left">
              <div class="col-6">
                <div class="card text-dark text-left">
                    <div class="card-body">
                        <p class="lead">${About.Main.content.primary}</p>
                    </div>
                </div>
              </div>
              <div class="col-6">
                <div class="card text-dark text-left">
                    <div class="card-body">
                        <p class="lead">${About.Main.content.secondary}</p>
                        <h3>${About.Main.content.tertiary}</h3>
                    </div>
                </div>
              </div>
            </div>
          </main>

          ${await FooterTemplate()}
    `;
};
