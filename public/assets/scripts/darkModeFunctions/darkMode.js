const currentURL = window.location.href;
let styleElement;

const injectDarkModeCSS = () => {
    styleElement = document.createElement("style");
    styleElement.innerHTML = `
            body {
                background-color: #262626 !important;
                color: #e0e0e0 !important;
            }


            /* for undo filter */
            img, picture, video, iframe, canvas, .legendColorBox, #legend_unordered_list li svg, .welldone {
                // filter: invert(1) hue-rotate(-180deg) saturate(1) !important;
            }

            a,b,h1,h2,h3,h4,h5,h6{
                color: #f5f5f5 !important;
            }
            
            li,span{
                color: #ffffff !important;
            }

            .mobile-toolbar {
                background-color: #333333 !important;
            }

            .roundbox {
                background-color: #333333 !important;
            }

            p,li,span{
                color: #ffffff !important;
            }

            .spoiler-content {
                background-color: #333333 !important;
            }

            .topic .title * {
                color: #4a7bd0 !important;
            }


            .login-button-custom {
                background-color: #423dc8 !important;
            }
            

            input, textarea, select {
                background-color: #dadadd !important;
                color: #1a1a1a !important;
                border: none !important;
                border-radius: 4px !important;
                padding-top: 4px !important;
                padding-bottom: 4px !important;
            }

            button {
                background-color: #2a2a2a !important;
                color: #e0e0e0 !important;
                border-color: #555 !important;
            }

            .rated-user{
                filter: brightness(1.5) contrast(1.2) !important;
            }

            .user-blue {
                color: #1976d2 !important; 
            }
            
            .user-black {
                color: rgba(0, 0, 0, 0.8) !important; 
            }


            .menu-list-container a, .second-level-menu-list a {
                color: #1a1a1a !important;
            }

            ::-webkit-scrollbar {
                background: #2a2a2a !important;
            }

            ::-webkit-scrollbar-track {
                background: #2a2a2a;
            }

            ::-webkit-scrollbar-thumb {
                background: #555;
            }

            ::selection {
                background-color: #bb86fc;
                color: #121212;
            }
        `;

    if (document.head) {
        document.head.appendChild(styleElement);
    } else {
        const observer = new MutationObserver(() => {
            if (document.head) {
                document.head.appendChild(styleElement);
                observer.disconnect();
            }
        });
        observer.observe(document, { childList: true, subtree: true });
    }
}

const sortToggleImgInvert = () => {
    if (!currentURL.includes("codeforces.com/problemset")) {
        return;
    }
    const anchorElements = document.querySelectorAll("a.non-decorated");

    anchorElements.forEach((anchor) => {
        const imgElements = anchor.querySelectorAll("img");

        imgElements[1].classList.add("custom-image");
    });
};

const removeSortToggleImgInvert = () => {
    if (!currentURL.includes("codeforces.com/problemset")) {
        return;
    }
    const anchorElements = document.querySelectorAll("a.non-decorated");

    anchorElements.forEach((anchor) => {
        const imgElements = anchor.querySelectorAll("img");

        imgElements[1].classList.remove("custom-image");
    });
};