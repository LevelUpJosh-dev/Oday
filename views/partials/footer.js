
export default async () => {
    const Oday = window.Oday;

    return `
     <footer class="${Oday.Layout.Footer.classes}" style="${Oday.Layout.Footer.styles}">
        <small>${Oday.Layout.Footer.content.primary}</small>
        </br>
        <small>${Oday.Layout.Footer.content.secondary}</small>
        </br>
        <small>${Oday.Layout.Footer.content.tertiary}</small>
     </footer>
    `
}