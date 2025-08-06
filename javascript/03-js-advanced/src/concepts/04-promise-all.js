import { heroes } from "../api/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseComponent = (element) => {
    // La parte se compromete a realizar el trabajo y la otra parte se compromete a esperar el resultado
    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    };

    const renderError = (error) => {
        element.innerHTML = `
        <h2>🚨 ${error}</h2>	t
    `;
    };

    const id1 = "5d86371f25a058e5b1c8a65e";
    const id2 = "5d86371fd55e2e2a30fe1ccb";

    // Array de promesas que se ejecutan en paralelo
    Promise.all([findHero(id1), findHero(id2)])
        .then(([hero1, hero2]) => renderHero(hero1, hero2))
        .catch(renderError);
};

/**
 *
 * @param {String} id
 * @returns {Promise}
 */
const findHero = (id) => {
    return new Promise((resolve, reject) => {
        const hero = heroes.find((hero) => hero.id === id);

        if (hero) {
            resolve(hero);
        } else {
            reject(`Hero with id ${id} not found`);
        }
    });
};
