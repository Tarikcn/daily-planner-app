$(function () {
  /* ============================= Element & Variable Declaration  ============================= */
  var displayedCurrentTime = $("#currentDay");
  var timeBlockListEl = $(".time-block");

  /* --------- display the current date in  the page. ---------*/
  setInterval(() => {
    var dateTime = dayjs();
    displayedCurrentTime.text(dateTime.format("dddd, MMMM DD, h:mm:ss , YYYY"));
  }, 1000);
});
