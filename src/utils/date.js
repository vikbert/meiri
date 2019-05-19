export const dateToString = () => {
  const currentDate = new Date().toISOString();

  const year = currentDate.substr(0, 4);
  const month = currentDate.substr(5, 2);
  const day = currentDate.substr(8, 2);

  return `${year}-${month}-${day}`;
};
