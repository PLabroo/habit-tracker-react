// utils folder to get dates for last 7 days

const formatDate = (date) => {
  var dd = date.getDate();
  var mm = date.getMonth() + 1;
  var yyyy = date.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  date = dd + "/" + mm + "/" + yyyy;
  return date;
};

export const Last7Days = () => {
  var result = [];
  for (var i = 0; i < 7; i++) {
    var d = new Date();
    d.setDate(d.getDate() - i);
    result.push({ getDate: formatDate(d), status: "none" });
  }

  return result;
  //   [0].replace(/['"]+/g, ""
};
