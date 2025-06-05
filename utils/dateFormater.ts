const dateFormater = (date: string) => {
  const dateField = new Date(date);
  const year = dateField.getFullYear();
  const month = String(dateField.getMonth() + 1).padStart(2, "0");
  const day = String(dateField.getDate()).padStart(2, "0");
  const formatdateField = `${year}-${month}-${day}`;
  return formatdateField
};
export default dateFormater