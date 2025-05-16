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

  const id1 = "5d86371f25a058e5b1c8a65e";
  const id2 = "5d86371fd55e2e2a30fe1ccb";

  findHero(id1).then((hero) => renderHero(hero));
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
