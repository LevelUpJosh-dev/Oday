export default (context) => {
  const Oday = window.Oday;
  const { Navigation, Layout, Home, DenoInfo, About, active, emptyClass } =
    Oday;
  const { Logo } = Layout;
  const { Header } = Navigation;

  return `
        <header id="${Navigation.Header.id}" class="${
    Navigation.classes || emptyClass
  }">
            <img src="${Logo.href}" class="${Logo.classes}" alt="${Logo.alt}" />
            <div>
              <nav class="${Header.classes}">
                <a class="${Header.content.Home.classes} ${
    context.id === Home.id ? active : ""
  }" aria-current="page" href="${Header.content.Home.href}">
                    ${Header.content.Home.content.primary}
                </a>
                <a class="${Header.content.DenoInfo.classes} ${
    context.id === DenoInfo.id ? active : ""
  }" href="${Header.content.DenoInfo.href}">
                    ${Header.content.DenoInfo.content.primary}
                </a>
                <a class="${Header.content.About.classes} ${
    context.id === About.id ? active : ""
  }" href="${Header.content.About.href}">
                    ${Header.content.About.content.primary}
                </a>
              </nav>
            </div>
       </header>
    `;
};
