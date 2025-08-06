/**
 *
 * @param {HTMLDivElement} element
 */
export const environmentsComponent = (element) => {
  const html = `
        DEV: ${import.meta.env.DEV} <br>
        PROD: ${import.meta.env.PROD} <br>
        MODE: ${import.meta.env.MODE} <br>
        BASE_URL: ${import.meta.env.BASE_URL} <br>
        VITE_API_URL: ${import.meta.env.VITE_API_URL} <br>
        VITE_API_KEY: ${import.meta.env.VITE_API_KEY} <br>
     `;
  element.innerHTML = html;
};
