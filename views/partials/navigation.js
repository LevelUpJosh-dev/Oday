
export default async (context) => {
    const Oday = window.Oday;
    const { Layout } = Oday;

    return `
        <header class="${Oday.emptyClass}">
            <img src="${Layout.Logo.href}" class="${Layout.Logo.classes}" alt="${Layout.Logo.alt}" />
            <div>
              <nav class="${Layout.Navigation.classes}">
                <a class="${Layout.Navigation.content.Home.classes} ${context.id === Oday.Home.id ? Oday.active : ''}" aria-current="page" href="${Layout.Navigation.content.Home.href}">
                    ${Layout.Navigation.content.Home.content.primary}
                </a>
                <a class="${Layout.Navigation.content.DenoInfo.classes} ${context.id === Oday.DenoInfo.id ? Oday.active : ''}" href="${Layout.Navigation.content.DenoInfo.href}">
                    ${Layout.Navigation.content.DenoInfo.content.primary}
                </a>
                <a class="${Layout.Navigation.content.About.classes} ${context.id === Oday.About.id ? Oday.active : ''}" href="${Layout.Navigation.content.About.href}">
                    ${Layout.Navigation.content.About.content.primary}
                </a>
              </nav>
            </div>
       </header>
    `
}