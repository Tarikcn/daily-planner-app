$(function () {
  /* ============================= Element & Variable Declaration  ============================= */
  /*var displayedCurrentTime = $("#currentDay");
  var timeBlockListEl = $(".time-block");

  /* --------- display the current date in  the page. using day.js API ---------*/
  /*setInterval(() => {
    var dateTime = dayjs();
    displayedCurrentTime.text(dateTime.format("dddd, MMMM DD, YYYY, h:mm:ss "));
  }, 1000);
  var timeBlockListEl = $(".time-block");
  /* Functions*/
  /* --------- display the current date in  the page. ---- tried using day.js as it uses the same API as moment and reduces the file size by 97% but after asking our instructod JD i was told to stick to the requirement for using moment.js-----*/
  setInterval(() => {
    var currentDate = moment().format("dddd, MMMM DD, YYYY, h:mm:ss ");
    $("#currentDay").text(currentDate);
  }, 1000);
  var timeBlockListEl = $(".time-block");
  //Time display
  timeBlkDisplayColor();
  setInterval(timeBlkDisplayColor, 1000 * 60 * 30);

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
  /* [--------- For timeblock background-color ---------] */
  function timeBlkDisplayColor() {
    var currentHour = moment().hour();
    timeBlockListEl.each(function () {
      var hourBlockStr = $(this).attr("id").split("-")[1];
      var hourBlockNum = parseInt(hourBlockStr);

      if (hourBlockNum === currentHour) {
        // present
        $(this).addClass("present");
      } else if (hourBlockNum < currentHour) {
        // past
        $(this).addClass("past");
      } else {
        // future
        $(this).addClass("future");
      }
      // console.log(`Current: ${currentHour}`);
      // console.log(hourBlockNum);
    });
  }

  /* Event listener*/

  //-----------Add event listner to click on save button ---------
  timeBlockListEl.on("click", ".saveBtn", function (evt) {
    evt.preventDefault();

    // alert if input is empty and save to local storage if input in text area
    var key = $(this).siblings(".hour").text();
    var value = $(this).siblings(".description").val();
    var errorMessage =
      "Text area cannot be empty. Please input your notes... \nor use the delete button to clear all text";
    typeof value === "string" && value.trim().length === 0
      ? window.alert(errorMessage)
      : localStorage.setItem(key, value);
  });
});
