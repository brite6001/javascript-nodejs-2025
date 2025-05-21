/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async () => {
  const response = await fetch("https://api.breakingbadquotes.xyz/v1/quotes/");
  if (!response.ok) {
    throw new Error("Failed to fetch quote");
  }

  const data = await response.json();
  return data[0];
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingbadApp = async (element) => {};
