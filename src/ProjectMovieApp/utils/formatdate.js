// utils/formatDate.js

export const formatDateToDDMMYYYY = (dateString) => {
  if (!dateString) return "";

  const [year, month, day] = dateString.split("-");

  return `${day}-${month}-${year}`;
};