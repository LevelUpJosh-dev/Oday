import FooterTemplate from "../../partials/footer.js";
import NavigationTemplate from "../../partials/navigation.js";

export default async () => {
  const { DenoInfo, emptyClass } = window.Oday;

  return `
        <div class="${DenoInfo.classes || emptyClass}">
          ${await NavigationTemplate(DenoInfo)}
          <main class=" container px-3">
            <div class="p-2 row text-dark text-left">
              <h3>${DenoInfo.Header.content.primary}</h3>
              <div class="col-6">
                <div class="card text-dark text-left">
                    <div class="card-body">
                        <p class="lead">${DenoInfo.Main.content.primary}</p>
                    </div>
                </div>
              </div>
              <div class="col-6">
                <div class="card text-dark text-left">
                    <div class="card-body">
                        <p class="lead">${DenoInfo.Main.content.secondary}</p>
                    </div>
                </div>
              </div>
            </div>
          </main>
          ${await FooterTemplate()}
    `;
};
