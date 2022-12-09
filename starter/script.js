$(function () {
  /* ============================= Element & Variable Declaration  ============================= */
  var displayedCurrentTime = $("#currentDay");
  var timeBlockListEl = $(".time-block");

  /* --------- display the current date in  the page. ---------*/
  setInterval(() => {
    var dateTime = dayjs();
    displayedCurrentTime.text(dateTime.format("dddd, MMMM DD, h:mm:ss , YYYY"));
  }, 1000);

  /* Functions*/
  //----Get local stocal storage data and display in browser
  function renderData() {
    timeBlockListEl.each(function () {
      var keyName = $(this).children().eq(0).text();
      var remoteValue = localStorage.getItem(keyName);
      if (remoteValue) {
        $(this).children(".description").val(remoteValue);
      }
    });
  }

  /* Event listener*/
});
