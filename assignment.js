
// Convert Kilometer to Meter.
function kilometerToMeter(kilometer) {
  if (kilometer < 0) {
      return "distance cannot be negative.";
  } else {
      var result = kilometer * 1000;    // 1 km = 1000 meter
      return result;
  }
}



// Calculate Total Budget.
function budgetCalculator(watch, phone, laptop) {
  if (watch < 0 || phone < 0 || laptop < 0) {
      return "product can not be negative.";
  } else {
      var watchPrice = watch * 50;  // 1 watch = 50
      var phonePrice = phone * 100;   // 1 phone = 100
      var laptopPrice = laptop * 500;   // 1 laptop = 500

      var totalPrice = watchPrice + phonePrice + laptopPrice;
      return totalPrice;
  }
}



// Calculate Hotel Cost.
function hotelCost(day) {
  var totalCost = 0;

  if (day < 0) {
      return "day can not be negative.";
  } else {
      if (day <= 10) {
          var totalCost = day * 100;   // first 10 day (1day = 100)
      } else if (day <= 20) {
          var firstTenDay = 10 * 100;
          var remainingDay = day - 10;
          var remainingDayCost = remainingDay * 80;    // second 10 day (1day = 80)
          var totalCost = firstTenDay + remainingDayCost;
      } else {
          var firstTenDay = 10 * 100;
          var secondTenDay = 10 * 80;
          var remainingDay = day - 20;
          var remainingDayCost = remainingDay * 50;   // after second 10 day (1day = 50)
          var totalCost = firstTenDay + secondTenDay + remainingDayCost;
      }
        return totalCost;
  }
}



// Return Big (Maximum Letter) Name.
function megaFriend(arr) {
  if (arr == null) {
      return "please enter an array.";
  } else if (!arr.length) {
      return "array is empty."
  } else {

      var maxName = arr[0];
      for (var i = 0; i < arr.length; i++) {
        var name = arr[i];
        if (name.length > maxName.length) {
            maxName = name;
      }
    }
      return maxName;
  }
}

