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
  //----Get user data that was saved in localStorage
  renderData();
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

  //-----------Add event listner to click on save button ---------
  timeBlockListEl.on("click", ".saveBtn", function (evt) {
    evt.preventDefault();
    // alert if input is empty and save to local storage is input in text area
    var key = $(this).siblings(".hour").text();
    var value = $(this).siblings(".description").val();
    var errorMessage =
      "Text area cannot be empty. Please input your notes... \nor use the delete button to clear all text";
    typeof value === "string" && value.trim().length === 0
      ? window.alert(errorMessage)
      : localStorage.setItem(key, value);
  });
});
