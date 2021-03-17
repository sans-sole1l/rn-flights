import { EN_MONTHS } from "./constants";

const currentMonth = new Date().toISOString().substr(0, 7);

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const monthName = EN_MONTHS.find((item, index) => index === month);
  const formatedDate = `${day} ${monthName}, ${year}`;
  return formatedDate;
}

export { formatDate, currentMonth };
