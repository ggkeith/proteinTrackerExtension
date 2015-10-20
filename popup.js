$(function() {
  chrome.storage.sync.get("total", function (items) {
    $("total").text(items.total)
  });

  $("#addAmount").click(function() {
    chrome.storage.sync.get("total", function (items) {
      var newTotal = 0;
      if (items.total) {
        newTotal += parseInt(items.total);
      }

      var amount = $("#amount").val();
      if (amount) {
        newTotal += parseInt(amount);
      }
      chrome.storage.sync.set({"total" : newTotal});
      $("#total").text(newTotal);
      $("#amount").val("");
    });
  });
});
