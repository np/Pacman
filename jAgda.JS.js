define(["exports"],function(exports) {
  exports["⊤"] = {};
  exports["ℕ"] = {};
  exports["JSCmd"] = {};
  exports["Bool"] = {};
  exports["JSCmd"]["getCtx"] = function (x0) {
      return function (x1) {
        return x1["getCtx"](x0);
      };
    };
  exports["showNat"] = function (x0) {
      return x0["toString"]();
    };
  exports["JSCmd"]["addEventListner"] = function (x0) {
      return function (x1) {
        return x1["addEventListner"](x0);
      };
    };
  exports["JSCmd"]["pacman"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return x5["pacman"](x0, x1, x2, x3, x4);
              };
            };
          };
        };
      };
    };
  exports["JSCmd"]["getCanvas"] = function (x0) {
      return x0["getCanvas"]();
    };
  exports["JSCmd"]["bind"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return x4["bind"](x0, x1, x2, x3);
            };
          };
        };
      };
    };
  exports["JSCmd"]["ret"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2["ret"](x0, x1);
        };
      };
    };
  exports["JSCmd"]["fillStyle"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2["fillStyle"](x0, x1);
        };
      };
    };
  exports["keyCode"] = function (x0) {
      return x0["keyCode"];
    };
  exports["¬"] = function (x0) {
      if (x0) {
        return false;
      } else {
        return true;
      }
    };
  exports["JSCmd"]["writeRef"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3["writeRef"](x0, x1, x2);
          };
        };
      };
    };
  exports["JSCmd"]["setScoreText"] = function (x0) {
      return function (x1) {
        return x1["setScoreText"](x0);
      };
    };
  exports["JSCmd"]["fillRect"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return x5["fillRect"](x0, x1, x2, x3, x4);
              };
            };
          };
        };
      };
    };
  exports["Ref"] = function (x0) {
      return "*";
    };
  exports["if_then_else_"] = function (x0) {
      return function (x1) {
        if (x1) {
          return function (x2) {
            return function (x3) {
              return x2;
            };
          };
        } else {
          return function (x2) {
            return function (x3) {
              return x3;
            };
          };
        }
      };
    };
  exports["_&_"] = function (x0) {
      return function (x1) {
        return (x0 + x1);
      };
    };
  exports["JSCmd"]["mkRef"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2["mkRef"](x0, x1);
        };
      };
    };
  exports["JSCmd"]["readRef"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2["readRef"](x0, x1);
        };
      };
    };
  exports["JSCmd"]["alert"] = function (x0) {
      return function (x1) {
        return x1["alert"](x0);
      };
    };
  exports["ℕ"]["suc"] = function (x0) {
      return (x0 + 1);
    };
  exports["ℕ"]["zero"] = 0;
  exports["String"] = "*";
  exports["Event"] = "*";
  exports["⊤"]["<>"] = {
      "<>": function (x0) {
        return x0["<>"]();
      }
    };
  exports["primStringAppend"] = undefined;
  exports["Context"] = "*";
  exports["Bool"]["false"] = false;
  exports["Canvas"] = "*";
  exports["Bool"]["true"] = true;
  });
