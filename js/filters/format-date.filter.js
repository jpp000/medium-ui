app.filter("formatDate", function () {
  return function (date, format) {
    if (!date) {
      return date
    }

    return moment(date).format(format)
  }
})