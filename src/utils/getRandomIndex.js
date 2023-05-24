const getRandomIndex = (elements) => {
  const randomIndex = Math.floor(Math.random() * elements.length);
  return randomIndex;
};

export default getRandomIndex;
