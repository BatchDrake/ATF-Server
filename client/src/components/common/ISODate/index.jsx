function ISODate({ value, year, month, day, weekday }) {
  const options = {};
  if (year) options["year"] = year;
  if (month) options["month"] = month;
  if (day) options["day"] = day;
  if (weekday) options["weekday"] = weekday;
  return new Date(value).toLocaleDateString("es-ES", options);
}

export default ISODate;
