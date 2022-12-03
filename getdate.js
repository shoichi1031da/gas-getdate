function doGet() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const week = date.getDay();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const response = year + "\n" + month + "\n" + day + "\n" + week + "\n" + hour + "\n" + minute + "\n" + second + "\n";

  return ContentService.createTextOutput(response);
}
