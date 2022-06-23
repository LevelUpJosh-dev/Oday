const MainStyles = `
    <style>
        .btn-secondary,
        .btn-secondary:hover,
        .btn-secondary:focus {
            color: #333;
            text-shadow: none; /* Prevent inheritance from \`body\` */
        }
    
        body {
            text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
        }
    
        .cover-container {
            max-width: 42em;
        }
    
        .nav-masthead .nav-link {
            padding: .25rem 0;
            font-weight: 700;
            color: #616640;
            background-color: transparent;
            border-bottom: .25rem solid transparent;
        }
    
        .nav-masthead .nav-link:hover,
        .nav-masthead .nav-link:focus {
            border-bottom-color: rgba(255, 255, 255, .25);
        }
    
        .nav-masthead .nav-link + .nav-link {
            margin-left: 1rem;
        }
    
        .nav-masthead .active {
            color: #3c3c20;
            border-bottom-color: #75934e;
        }
        /** TODO: Overrides until I finish moving bootstrap local and do cleaner overrides. Below baseStyles so it's the final styling rules applied. **/
        body p, body span, body a {
         color: #3c3c20;
        }
        .btn.btn-primary {
            background-color: #F7BF4F;
            color: #000000;
        }
        body.bg-secondary {
            background-color: #d5cfb6!important; /** TODO: Using this hurts me but until refactor bootstrap to static here we are. **/
        }
    </style>
`;

export default (data) => {
  const { Layout, Resources } = window.Oday;
  const { Bootstrap, Sherlock } = Resources;
  const { Head, Body, Logo, title, lang, id } = Layout;

  return `
    <!DOCTYPE html>
        <html lang="${lang}">
            <head>
                <script>
                    ${window.Sherlock || ""}
                </script>
                ${Bootstrap.enabled ? Bootstrap.css : ""}
                <meta charset="UTF-8" name="${Head.Meta.Viewport.name}" content="${Head.Meta.Viewport.content}">
                <meta charset="UTF-8" name="${Head.Meta.Description.name}" content="${Head.Meta.Description.content}">
                <link rel="icon" type="image/x-icon" href="${Logo.href}">
                <title>${title}</title>
                ${MainStyles}
            </head>
            <body id="${id}" class="${Body.classes || emptyClass}">
                ${data.Body}
                ${Bootstrap.enabled ? Bootstrap.js : ""}
            </body>
        </html>
    `;
};
