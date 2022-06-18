
export default async () => {
    const Oday = window.Oday;

    return `
     <footer class="mt-auto">
        <small>${Oday.Layout.Footer.content.primary}</small>
        </br>
        <small>${Oday.Layout.Footer.content.secondary}</small>
        </br>
        <small>${Oday.Layout.Footer.content.tertiary}</small>
     </footer>
    `
}