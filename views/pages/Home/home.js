import FooterTemplate from "../../partials/footer.js";
import NavigationTemplate from "../../partials/navigation.js";
import AboutMePartial from "../../partials/aboutMe.js";

export default async () => {
  const { Home, emptyClass } = window.Oday;
  const { Header, Main } = Home;

  return `
        <div class="${Home.classes || emptyClass}">
            ${await NavigationTemplate(Home)}
            <main class="${Home.Main.classes}">
              <h2>${Header.content.primary}</h2>
              <small>${Header.content.secondary}</small>
  
            ${await AboutMePartial()}
          </main>
          ${await FooterTemplate()}
        </div>
    `;
};
