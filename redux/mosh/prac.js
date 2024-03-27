const result = function (message) {
    return function (two) {
      return function (three) {
        return function (four){
          return `${message} : ${two + three + four}`
        }
      };
    };
  };

console.log(result("result")(1)(2)(3))

