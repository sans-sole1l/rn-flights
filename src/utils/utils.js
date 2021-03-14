import { MONTHS, EN_MONTHS } from "./constants";

const today = new Date().toISOString().substr(0, 10);

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const monthName = MONTHS.find((item, index) => index === month);
  const formatedDate = `${day} ${monthName} ${year}`;
  return formatedDate;
}

function formatEnDate(dateStr) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const monthName = EN_MONTHS.find((item, index) => index === month);
  const formatedDate = `${day} ${monthName}, ${year}`;
  return formatedDate;
}

function formatTitle(cards) {
  let amount = cards.length;
  if (amount > 20) {
    const ten = Math.floor(amount/10)*10;
    amount = amount - ten;
  }

  let str = '';
  switch (amount) {
    case 0: 
      str = 'рейсов';
      break;
    case 1: 
      str = 'рейс';
      break;
    case 2:
    case 3: 
    case 4: 
      str = 'рейса';
      break;
    case amount: 
      str = 'рейсов';
      break;
    default:
      break;
  }
  return str;
}

export { formatDate, formatTitle, today, formatEnDate };
