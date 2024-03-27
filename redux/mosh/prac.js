const result = function (one) {
    return function (two) {
      return function (three) {
        return (one + two + three)
      };
    };
  };

console.log(result(1)(2)(3))
