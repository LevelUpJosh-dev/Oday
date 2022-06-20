export default async () => {
  const { Layout, emptyClass } = window.Oday;

  return `
     <footer class="${
    Layout.Footer.classes || emptyClass
  }" style="${Layout.Footer.styles}">
        <small>${Layout.Footer.content.primary}</small>
        </br>
        <small>${Layout.Footer.content.secondary}</small>
        </br>
        <small>${Layout.Footer.content.tertiary}</small>
     </footer>
    `;
};
