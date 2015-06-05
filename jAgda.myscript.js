define(["exports","jAgda.JS"],function(exports,jAgda_JS) {
  exports["Fin"] = {};
  exports["⊥"] = {};
  exports["GameState"] = {};
  exports["Vec"] = {};
  exports["KeyPress"] = {};
  exports["Maybe"] = {};
  exports["Tile"] = {};
  exports["max"] = function (x0) {
      if ((x0 < 1)) {
        return exports["Fin"]["zero"](0);
      } else {
        return exports["Fin"]["suc"](((x0 - 1) + 1))(exports["max"]((x0 - 1)));
      }
    };
  exports["foldl"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3({
              "[]": function () {
                return function (x4) {
                  return function (x5) {
                    return x4;
                  };
                };
              },
              "_∷_": function (x4, x5, x6) {
                return function (x7) {
                  return function (x8) {
                    return exports["foldl"](x0)(function (x9) {
                      return x1((x9 + 1));
                    })(x4)(x6)(x8(0)(x5)(x7))(function (x9) {
                      return x8((x9 + 1));
                    });
                  };
                };
              }
            });
          };
        };
      };
    };
  exports["abort"] = function (x0) {
      return function (x1) {
        if ((x1 < 1)) {
          return function (x2) {
            return undefined;
          };
        } else {
          return function (x2) {
            return exports["abort"](x0)((x1 - 1))(x2);
          };
        }
      };
    };
  exports["_++_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3({
              "[]": function () {
                return function (x4) {
                  return x4;
                };
              },
              "_∷_": function (x4, x5, x6) {
                return function (x7) {
                  return exports["Vec"]["_∷_"]((x4 + x2))(x5)(exports["_++_"](x0)(x4)(x2)(x6)(x7));
                };
              }
            });
          };
        };
      };
    };
  exports["getBulletColor"] = function (x0) {
      return x0({
        "E": function () {
          return exports["getTileColor"](x0);
        },
        "O": function () {
          return exports["white"];
        },
        "W": function () {
          return exports["getTileColor"](x0);
        }
      });
    };
  exports["updateGS"] = function (x0) {
      return function (x1) {
        return jAgda_JS["if_then_else_"]("*")(exports["isValid"](exports["updateGS'"](x0)(x1)))(exports["checkScore"](exports["updateGS'"](x0)(x1)))(x1);
      };
    };
  exports["printState"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["_>>=_"]("*")("*")(jAgda_JS["JSCmd"]["readRef"]("*")(x1))(function (x3) {
            return exports["_>>_"]("*")(jAgda_JS["JSCmd"]["setScoreText"](exports["getPoints"](x3)["toString"]()))(exports["printGS"](x0)(x3)(x2));
          });
        };
      };
    };
  exports["_310@241631699"] = {};
  exports["_310@241631699"]["kc"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["getKeyCode"](x2);
        };
      };
    };
  exports["_∘_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return x3(x4(x5));
              };
            };
          };
        };
      };
    };
  exports["lookup"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "[]": function () {
              return function (x3) {
                return undefined;
              };
            },
            "_∷_": function (x3, x4, x5) {
              return function (x6) {
                return x6({
                  "suc": function (x7, x8) {
                    return exports["lookup"](x0)(x3)(x5)(x8);
                  },
                  "zero": function (x7) {
                    return x4;
                  }
                });
              };
            }
          });
        };
      };
    };
  exports["Tile"]["O"] = function (x0) {
      return x0["O"]();
    };
  exports["KeyPress"]["kd"] = function (x0) {
      return x0["kd"]();
    };
  exports["doMaze"] = function (x0) {
      return function (x1) {
        return exports["do"](31)("*")(x0)(exports[".extendedlambda0"](x0)(x1));
      };
    };
  exports["printTile"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["_>>_"]("*")(jAgda_JS["JSCmd"]["fillStyle"](x0)(exports["getTileColor"](x3)))(exports["_>>_"]("*")(jAgda_JS["JSCmd"]["fillRect"](x0)((15 * exports["!_"](28)(x2)))((15 * exports["!_"](31)(x1)))(15)(15))(exports["_>>_"]("*")(jAgda_JS["JSCmd"]["fillStyle"](x0)(exports["getBulletColor"](x3)))(jAgda_JS["JSCmd"]["fillRect"](x0)(((15 * exports["!_"](28)(x2)) + 6))(((15 * exports["!_"](31)(x1)) + 6))(3)(3))));
          };
        };
      };
    };
  exports["isValid"] = function (x0) {
      return x0["GS"]({
        "GS": function (x1, x2, x3, x4) {
          return exports["with-257"](x1)(x2)(x3)(exports["lookup"]("*")(28)(exports["lookup"]("*")(31)(x1)(x2))(x3))(x4);
        }
      });
    };
  exports["id"] = function (x0) {
      return function (x1) {
        return x1;
      };
    };
  exports["_≤_"] = function (x0) {
      return function (x1) {
        return "*";
      };
    };
  exports["_<_"] = function (x0) {
      return function (x1) {
        return "*";
      };
    };
  exports["GameState"]["pc"] = function (x0) {
      return x0["pc"];
    };
  exports["update"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["_>>_"]("*")(exports["maybe"]("*")("*")(jAgda_JS["JSCmd"]["ret"]("*")(jAgda_JS["⊤"]["<>"]))(exports["_∘_"]("*")("*")("*")(exports["modify"]("*")(x1))(exports["updateGS"]))(exports["_310@241631699"]["kc"](x0)(x1)(x2)))(exports["printState"](x0)(x1)(exports["_310@241631699"]["kc"](x0)(x1)(x2)));
        };
      };
    };
  exports["printMaze"] = function (x0) {
      return function (x1) {
        return exports["doMaze"](x1)(exports["printTile"](x0));
      };
    };
  exports["Maybe"]["nothing"] = function (x0) {
      return x0["nothing"]();
    };
  exports["with-272"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3({
              "E": function () {
                return function (x4) {
                  return exports["GameState"]["GS"](x0)(x1)(x2)(x4);
                };
              },
              "O": function () {
                return function (x4) {
                  return exports["GameState"]["GS"](exports["_[_≔_]"]("*")(31)(x0)(x1)(exports["_[_≔_]"]("*")(28)(exports["lookup"]("*")(31)(x0)(x1))(x2)(exports["Tile"]["E"])))(x1)(x2)((1 + x4));
                };
              },
              "W": function () {
                return function (x4) {
                  return exports["GameState"]["GS"](x0)(x1)(x2)(x4);
                };
              }
            });
          };
        };
      };
    };
  exports["mmap"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["maybe"](x0)("*")(exports["Maybe"]["nothing"])(exports["_∘_"](x0)(x1)("*")(exports["Maybe"]["just"])(x2));
        };
      };
    };
  exports["refl"] = function (x0) {
      if ((x0 < 1)) {
        return jAgda_JS["⊤"]["<>"];
      } else {
        return exports["refl"]((x0 - 1));
      }
    };
  exports["_>>_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_JS["JSCmd"]["bind"](x0)(x0)(x1)(function (x3) {
            return x2;
          });
        };
      };
    };
  exports["updateGS'"] = function (x0) {
      return x0({
        "kd": function () {
          return function (x1) {
            return x1["GS"]({
              "GS": function (x2, x3, x4, x5) {
                return exports["GameState"]["GS"](x2)(exports["maybe"]("*")("*")(exports["Fin"]["zero"](30))(exports["id"]("*"))(exports["msuc"](31)(x3)))(x4)(x5);
              }
            });
          };
        },
        "kl": function () {
          return function (x1) {
            return x1["GS"]({
              "GS": function (x2, x3, x4, x5) {
                return exports["GameState"]["GS"](x2)(x3)(exports["maybe"]("*")("*")(exports["max"](27))(exports["id"]("*"))(exports["mpred"](28)(x4)))(x5);
              }
            });
          };
        },
        "kr": function () {
          return function (x1) {
            return x1["GS"]({
              "GS": function (x2, x3, x4, x5) {
                return exports["GameState"]["GS"](x2)(x3)(exports["maybe"]("*")("*")(exports["Fin"]["zero"](27))(exports["id"]("*"))(exports["msuc"](28)(x4)))(x5);
              }
            });
          };
        },
        "ku": function () {
          return function (x1) {
            return x1["GS"]({
              "GS": function (x2, x3, x4, x5) {
                return exports["GameState"]["GS"](x2)(exports["maybe"]("*")("*")(exports["max"](30))(exports["id"]("*"))(exports["mpred"](31)(x3)))(x4)(x5);
              }
            });
          };
        }
      });
    };
  exports["printGS"] = function (x0) {
      return function (x1) {
        return x1["GS"]({
          "GS": function (x2, x3, x4, x5) {
            return function (x6) {
              return exports["_>>_"]("*")(exports["printMaze"](x0)(x2))(exports["printPlayer"](x0)(x3)(x4)(x6));
            };
          }
        });
      };
    };
  exports["checkScore"] = function (x0) {
      return x0["GS"]({
        "GS": function (x1, x2, x3, x4) {
          return exports["with-272"](x1)(x2)(x3)(exports["lookup"]("*")(28)(exports["lookup"]("*")(31)(x1)(x2))(x3))(x4);
        }
      });
    };
  exports["Assert"] = function (x0) {
      return "*";
    };
  exports["_+_"] = function (x0) {
      return function (x1) {
        return (x0 + x1);
      };
    };
  exports["mkRow"] = function (x0) {
      return exports["_++_"]("*")(14)(14)(x0)(exports["_160@241631699"]["reverse"]("*")(14)(x0));
    };
  exports["Fin"]["zero"] = function (x0) {
      return function (x1) {
        return x1["zero"](x0);
      };
    };
  exports["GameState"]["pr"] = function (x0) {
      return x0["pr"];
    };
  exports["do"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "[]": function () {
              return function (x3) {
                return jAgda_JS["JSCmd"]["ret"]("*")(jAgda_JS["⊤"]["<>"]);
              };
            },
            "_∷_": function (x3, x4, x5) {
              return function (x6) {
                return exports["_>>_"]("*")(x6(exports["Fin"]["zero"](x3))(x4))(exports["do"](x3)(x1)(x5)(function (x7) {
                  return x6(exports["Fin"]["suc"](x3)(x7));
                }));
              };
            }
          });
        };
      };
    };
  exports["Tile"]["W"] = function (x0) {
      return x0["W"]();
    };
  exports["getDirection"] = function (x0) {
      return x0({
        "just": function (x1) {
          return x1({
            "kd": function () {
              return 1;
            },
            "kl": function () {
              return 2;
            },
            "kr": function () {
              return 0;
            },
            "ku": function () {
              return 3;
            }
          });
        },
        "nothing": function () {
          return 0;
        }
      });
    };
  exports["Vec"]["[]"] = function (x0) {
      return x0["[]"]();
    };
  exports[".extendedlambda1"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return x1(x2)(x4)(x5);
              };
            };
          };
        };
      };
    };
  exports["Fin"]["suc"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2["suc"](x0, x1);
        };
      };
    };
  exports["GameState"]["p"] = function (x0) {
      return x0["p"];
    };
  exports["with-257"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3({
              "E": function () {
                return function (x4) {
                  return true;
                };
              },
              "O": function () {
                return function (x4) {
                  return true;
                };
              },
              "W": function () {
                return function (x4) {
                  return false;
                };
              }
            });
          };
        };
      };
    };
  exports["GameState"]["m"] = function (x0) {
      return x0["m"];
    };
  exports["getKeyCode"] = function (x0) {
      return jAgda_JS["if_then_else_"]("*")((x0["keyCode"] == 37))(exports["Maybe"]["just"](exports["KeyPress"]["kl"]))(jAgda_JS["if_then_else_"]("*")((x0["keyCode"] == 38))(exports["Maybe"]["just"](exports["KeyPress"]["ku"]))(jAgda_JS["if_then_else_"]("*")((x0["keyCode"] == 39))(exports["Maybe"]["just"](exports["KeyPress"]["kr"]))(jAgda_JS["if_then_else_"]("*")((x0["keyCode"] == 40))(exports["Maybe"]["just"](exports["KeyPress"]["kd"]))(exports["Maybe"]["nothing"]))));
    };
  exports["_[_≔_]"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "[]": function () {
              return function (x3) {
                return function (x4) {
                  return undefined;
                };
              };
            },
            "_∷_": function (x3, x4, x5) {
              return function (x6) {
                return x6({
                  "suc": function (x7, x8) {
                    return function (x9) {
                      return exports["Vec"]["_∷_"](x3)(x4)(exports["_[_≔_]"](x0)(x3)(x5)(x8)(x9));
                    };
                  },
                  "zero": function (x7) {
                    return function (x8) {
                      return exports["Vec"]["_∷_"](x3)(x8)(x5);
                    };
                  }
                });
              };
            }
          });
        };
      };
    };
  exports[".extendedlambda0"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["do"](28)("*")(x3)(exports[".extendedlambda1"](x0)(x1)(x2)(x3));
          };
        };
      };
    };
  exports["getPoints"] = function (x0) {
      return exports["GameState"]["p"](x0);
    };
  exports["_>>=_"] = function (x0) {
      return function (x1) {
        return jAgda_JS["JSCmd"]["bind"](x1)(x0);
      };
    };
  exports["!_"] = function (x0) {
      return function (x1) {
        return x1({
          "suc": function (x2, x3) {
            return (exports["!_"](x2)(x3) + 1);
          },
          "zero": function (x2) {
            return 0;
          }
        });
      };
    };
  exports["_*_"] = function (x0) {
      return function (x1) {
        return (x0 * x1);
      };
    };
  exports["Vec"]["_∷_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3["_∷_"](x0, x1, x2);
          };
        };
      };
    };
  exports["msuc"] = function (x0) {
      return function (x1) {
        return x1({
          "suc": function (x2, x3) {
            return exports["mmap"]("*")("*")(exports["Fin"]["suc"](x2))(exports["msuc"](x2)(x3));
          },
          "zero": function (x2) {
            if ((x2 < 1)) {
              return exports["Maybe"]["nothing"];
            } else {
              return exports["Maybe"]["just"](exports["Fin"]["suc"](((x2 - 1) + 1))(exports["Fin"]["zero"]((x2 - 1))));
            }
          }
        });
      };
    };
  exports["KeyPress"]["kr"] = function (x0) {
      return x0["kr"]();
    };
  exports["rep"] = function (x0) {
      return function (x1) {
        if ((x1 < 1)) {
          return function (x2) {
            return exports["Vec"]["[]"];
          };
        } else {
          return function (x2) {
            return exports["Vec"]["_∷_"]((x1 - 1))(x2)(exports["rep"](x0)((x1 - 1))(x2));
          };
        }
      };
    };
  exports["getTileColor"] = function (x0) {
      return x0({
        "E": function () {
          return exports["black"];
        },
        "O": function () {
          return exports["black"];
        },
        "W": function () {
          return exports["blue"];
        }
      });
    };
  exports["¡_"] = function (x0) {
      if ((x0 < 1)) {
        return function (x1) {
          return function (x2) {
            return exports["abort"]("*")(x1)(x2);
          };
        };
      } else {
        return function (x1) {
          if ((x1 < 1)) {
            return function (x2) {
              return exports["Fin"]["zero"]((x0 - 1));
            };
          } else {
            return function (x2) {
              return exports["Fin"]["suc"]((x0 - 1))(exports["¡_"]((x0 - 1))((x1 - 1))(x2));
            };
          }
        };
      }
    };
  exports["Tile"]["E"] = function (x0) {
      return x0["E"]();
    };
  exports["printPlayer"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["_>>_"]("*")(jAgda_JS["JSCmd"]["fillStyle"](x0)(exports["yellow"]))(jAgda_JS["JSCmd"]["pacman"](x0)(((15 * exports["!_"](28)(x2)) + 8))(((15 * exports["!_"](31)(x1)) + 8))(8)(exports["getDirection"](x3)));
          };
        };
      };
    };
  exports["makeFlag"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["_>>_"]("*")(jAgda_JS["JSCmd"]["fillStyle"](x0)(x1))(exports["_>>_"]("*")(jAgda_JS["JSCmd"]["fillRect"](x0)(0)(0)((2 * 400))(500))(exports["_>>_"]("*")(jAgda_JS["JSCmd"]["fillStyle"](x0)(x2))(exports["_>>_"]("*")(jAgda_JS["JSCmd"]["fillRect"](x0)(250)(0)(100)(500))(jAgda_JS["JSCmd"]["fillRect"](x0)(0)(200)(800)(100)))));
        };
      };
    };
  exports["KeyPress"]["ku"] = function (x0) {
      return x0["ku"]();
    };
  exports["maybe"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return x4({
                "just": function (x5) {
                  return x3(x5);
                },
                "nothing": function () {
                  return x2;
                }
              });
            };
          };
        };
      };
    };
  exports["mpred"] = function (x0) {
      return function (x1) {
        return x1({
          "suc": function (x2, x3) {
            return exports["Maybe"]["just"](exports["inject"](x2)(x3));
          },
          "zero": function (x2) {
            return exports["Maybe"]["nothing"];
          }
        });
      };
    };
  exports["GameState"]["GS"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return {
              "GS": function (x4) {
                return x4["GS"](x0, x1, x2, x3);
              },
              "m": x0,
              "p": x3,
              "pc": x2,
              "pr": x1
            };
          };
        };
      };
    };
  exports["inject"] = function (x0) {
      return function (x1) {
        return x1({
          "suc": function (x2, x3) {
            return exports["Fin"]["suc"]((x2 + 1))(exports["inject"](x2)(x3));
          },
          "zero": function (x2) {
            return exports["Fin"]["zero"]((x2 + 1));
          }
        });
      };
    };
  exports["_160@241631699"] = {};
  exports["_160@241631699"]["reverse"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["foldl"](x0)("*")(x1)(x2)(exports["Vec"]["[]"])(exports["Vec"]["_∷_"]);
        };
      };
    };
  exports["modify"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["_>>=_"](x0)("*")(jAgda_JS["JSCmd"]["readRef"](x0)(x1))(function (x3) {
            return jAgda_JS["JSCmd"]["writeRef"](x0)(x1)(x2(x3));
          });
        };
      };
    };
  exports["Maybe"]["just"] = function (x0) {
      return function (x1) {
        return x1["just"](x0);
      };
    };
  exports["_==_"] = function (x0) {
      return function (x1) {
        return (x0 == x1);
      };
    };
  exports["KeyPress"]["kl"] = function (x0) {
      return x0["kl"]();
    };
  exports["black"] = "#000000";
  exports["Col"] = "*";
  exports["Row"] = "*";
  exports["yellow"] = "#fecc00";
  exports["Maze"] = "*";
  exports["msg"] = jAgda_JS["JSCmd"]["ret"]("*")("hello");
  exports["maze"] = exports["Vec"]["_∷_"](30)(exports["rep"]("*")(28)(exports["Tile"]["W"]))(exports["Vec"]["_∷_"]((((((((((((((((((((((((((((((0 + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1))(exports["mkRow"](exports["Vec"]["_∷_"](13)(exports["Tile"]["W"])(exports["_++_"]("*")(12)((0 + 1))(exports["rep"]("*")(12)(exports["Tile"]["O"]))(exports["Vec"]["_∷_"](0)(exports["Tile"]["W"])(exports["Vec"]["[]"])))))(exports["Vec"]["_∷_"](((((((((((((((((((((((((((((0 + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1))(exports["mkRow"](exports["Vec"]["_∷_"](13)(exports["Tile"]["W"])(exports["Vec"]["_∷_"]((4 + ((5 + ((0 + 1) + 1)) + 1)))(exports["Tile"]["O"])(exports["_++_"]("*")(4)(((5 + ((0 + 1) + 1)) + 1))(exports["rep"]("*")(4)(exports["Tile"]["W"]))(exports["Vec"]["_∷_"]((5 + ((0 + 1) + 1)))(exports["Tile"]["O"])(exports["_++_"]("*")(5)(((0 + 1) + 1))(exports["rep"]("*")(5)(exports["Tile"]["W"]))(exports["Vec"]["_∷_"]((0 + 1))(exports["Tile"]["O"])(exports["Vec"]["_∷_"](0)(exports["Tile"]["W"])(exports["Vec"]["[]"])))))))))(exports["Vec"]["_∷_"]((((((((((((((((((((((((((((0 + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1))(exports["mkRow"](exports["Vec"]["_∷_"](13)(exports["Tile"]["W"])(exports["Vec"]["_∷_"]((4 + ((5 + ((0 + 1) + 1)) + 1)))(exports["Tile"]["O"])(exports["_++_"]("*")(4)(((5 + ((0 + 1) + 1)) + 1))(exports["rep"]("*")(4)(exports["Tile"]["W"]))(exports["Vec"]["_∷_"]((5 + ((0 + 1) + 1)))(exports["Tile"]["O"])(exports["_++_"]("*")(5)(((0 + 1) + 1))(exports["rep"]("*")(5)(exports["Tile"]["W"]))(exports["Vec"]["_∷_"]((0 + 1))(exports["Tile"]["O"])(exports["Vec"]["_∷_"](0)(exports["Tile"]["W"])(exports["Vec"]["[]"])))))))))(exports["Vec"]["_∷_"](((((((((((((((((((((((((((0 + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1))(exports["mkRow"](exports["Vec"]["_∷_"](13)(exports["Tile"]["W"])(exports["Vec"]["_∷_"]((4 + ((5 + ((0 + 1) + 1)) + 1)))(exports["Tile"]["O"])(exports["_++_"]("*")(4)(((5 + ((0 + 1) + 1)) + 1))(exports["rep"]("*")(4)(exports["Tile"]["W"]))(exports["Vec"]["_∷_"]((5 + ((0 + 1) + 1)))(exports["Tile"]["O"])(exports["_++_"]("*")(5)(((0 + 1) + 1))(exports["rep"]("*")(5)(exports["Tile"]["W"]))(exports["Vec"]["_∷_"]((0 + 1))(exports["Tile"]["O"])(exports["Vec"]["_∷_"](0)(exports["Tile"]["W"])(exports["Vec"]["[]"])))))))))(exports["Vec"]["_∷_"]((((((((((((((((((((((((((0 + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1))(exports["mkRow"](exports["Vec"]["_∷_"](13)(exports["Tile"]["W"])(exports["rep"]("*")(13)(exports["Tile"]["O"]))))(exports["Vec"]["_∷_"](((((((((((((((((((((((((0 + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1))(exports["mkRow"](exports["Vec"]["_∷_"](13)(exports["Tile"]["W"])(exports["Vec"]["_∷_"]((4 + ((((4 + 1) + 1) + 1) + 1)))(exports["Tile"]["O"])(exports["_++_"]("*")(4)(((((4 + 1) + 1) + 1) + 1))(exports["rep"]("*")(4)(exports["Tile"]["W"]))(exports["Vec"]["_∷_"]((((4 + 1) + 1) + 1))(exports["Tile"]["O"])(exports["Vec"]["_∷_"](((4 + 1) + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"]((4 + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"](4)(exports["Tile"]["O"])(exports["rep"]("*")(4)(exports["Tile"]["W"]))))))))))(exports["Vec"]["_∷_"]((((((((((((((((((((((((0 + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1))(exports["mkRow"](exports["Vec"]["_∷_"](13)(exports["Tile"]["W"])(exports["Vec"]["_∷_"]((4 + ((((4 + 1) + 1) + 1) + 1)))(exports["Tile"]["O"])(exports["_++_"]("*")(4)(((((4 + 1) + 1) + 1) + 1))(exports["rep"]("*")(4)(exports["Tile"]["W"]))(exports["Vec"]["_∷_"]((((4 + 1) + 1) + 1))(exports["Tile"]["O"])(exports["Vec"]["_∷_"](((4 + 1) + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"]((4 + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"](4)(exports["Tile"]["O"])(exports["rep"]("*")(4)(exports["Tile"]["W"]))))))))))(exports["Vec"]["_∷_"](((((((((((((((((((((((0 + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1))(exports["mkRow"](exports["Vec"]["_∷_"](13)(exports["Tile"]["W"])(exports["_++_"]("*")(6)((((4 + (0 + 1)) + 1) + 1))(exports["rep"]("*")(6)(exports["Tile"]["O"]))(exports["Vec"]["_∷_"](((4 + (0 + 1)) + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"]((4 + (0 + 1)))(exports["Tile"]["W"])(exports["_++_"]("*")(4)((0 + 1))(exports["rep"]("*")(4)(exports["Tile"]["O"]))(exports["Vec"]["_∷_"](0)(exports["Tile"]["W"])(exports["Vec"]["[]"]))))))))(exports["Vec"]["_∷_"]((((((((((((((((((((((0 + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1))(exports["mkRow"](exports["_++_"]("*")(6)(8)(exports["rep"]("*")(6)(exports["Tile"]["W"]))(exports["Vec"]["_∷_"]((5 + ((0 + 1) + 1)))(exports["Tile"]["O"])(exports["_++_"]("*")(5)(((0 + 1) + 1))(exports["rep"]("*")(5)(exports["Tile"]["W"]))(exports["Vec"]["_∷_"]((0 + 1))(exports["Tile"]["O"])(exports["Vec"]["_∷_"](0)(exports["Tile"]["W"])(exports["Vec"]["[]"])))))))(exports["Vec"]["_∷_"](((((((((((((((((((((0 + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1))(exports["mkRow"](exports["_++_"]("*")(5)(9)(exports["rep"]("*")(5)(exports["Tile"]["E"]))(exports["Vec"]["_∷_"](((5 + ((0 + 1) + 1)) + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"]((5 + ((0 + 1) + 1)))(exports["Tile"]["O"])(exports["_++_"]("*")(5)(((0 + 1) + 1))(exports["rep"]("*")(5)(exports["Tile"]["W"]))(exports["Vec"]["_∷_"]((0 + 1))(exports["Tile"]["O"])(exports["Vec"]["_∷_"](0)(exports["Tile"]["W"])(exports["Vec"]["[]"]))))))))(exports["Vec"]["_∷_"]((((((((((((((((((((0 + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1))(exports["mkRow"](exports["_++_"]("*")(5)(9)(exports["rep"]("*")(5)(exports["Tile"]["E"]))(exports["Vec"]["_∷_"]((((5 + 1) + 1) + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"](((5 + 1) + 1))(exports["Tile"]["O"])(exports["Vec"]["_∷_"]((5 + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"](5)(exports["Tile"]["W"])(exports["rep"]("*")(5)(exports["Tile"]["O"]))))))))(exports["Vec"]["_∷_"](((((((((((((((((((0 + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1))(exports["mkRow"](exports["_++_"]("*")(5)(9)(exports["rep"]("*")(5)(exports["Tile"]["E"]))(exports["Vec"]["_∷_"]((((((3 + (0 + 1)) + 1) + 1) + 1) + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"](((((3 + (0 + 1)) + 1) + 1) + 1))(exports["Tile"]["O"])(exports["Vec"]["_∷_"]((((3 + (0 + 1)) + 1) + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"](((3 + (0 + 1)) + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"]((3 + (0 + 1)))(exports["Tile"]["O"])(exports["_++_"]("*")(3)((0 + 1))(exports["rep"]("*")(3)(exports["Tile"]["W"]))(exports["Vec"]["_∷_"](0)(exports["Tile"]["E"])(exports["Vec"]["[]"]))))))))))(exports["Vec"]["_∷_"]((((((((((((((((((0 + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1))(exports["mkRow"](exports["_++_"]("*")(6)(8)(exports["rep"]("*")(6)(exports["Tile"]["W"]))(exports["Vec"]["_∷_"](((((3 + 1) + 1) + 1) + 1))(exports["Tile"]["O"])(exports["Vec"]["_∷_"]((((3 + 1) + 1) + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"](((3 + 1) + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"]((3 + 1))(exports["Tile"]["O"])(exports["Vec"]["_∷_"](3)(exports["Tile"]["W"])(exports["rep"]("*")(3)(exports["Tile"]["E"])))))))))(exports["Vec"]["_∷_"](((((((((((((((((0 + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1))(exports["mkRow"](exports["_++_"]("*")(10)(4)(exports["rep"]("*")(10)(exports["Tile"]["O"]))(exports["Vec"]["_∷_"](3)(exports["Tile"]["W"])(exports["rep"]("*")(3)(exports["Tile"]["E"])))))(exports["Vec"]["_∷_"]((((((((((((((((0 + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1))(exports["mkRow"](exports["_++_"]("*")(6)(8)(exports["rep"]("*")(6)(exports["Tile"]["W"]))(exports["Vec"]["_∷_"](((((3 + 1) + 1) + 1) + 1))(exports["Tile"]["O"])(exports["Vec"]["_∷_"]((((3 + 1) + 1) + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"](((3 + 1) + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"]((3 + 1))(exports["Tile"]["O"])(exports["Vec"]["_∷_"](3)(exports["Tile"]["W"])(exports["rep"]("*")(3)(exports["Tile"]["E"])))))))))(exports["Vec"]["_∷_"](((((((((((((((0 + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1))(exports["mkRow"](exports["_++_"]("*")(5)(9)(exports["rep"]("*")(5)(exports["Tile"]["E"]))(exports["Vec"]["_∷_"](((((4 + 1) + 1) + 1) + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"]((((4 + 1) + 1) + 1))(exports["Tile"]["O"])(exports["Vec"]["_∷_"](((4 + 1) + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"]((4 + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"](4)(exports["Tile"]["O"])(exports["rep"]("*")(4)(exports["Tile"]["W"])))))))))(exports["Vec"]["_∷_"]((((((((((((((0 + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1))(exports["mkRow"](exports["_++_"]("*")(5)(9)(exports["rep"]("*")(5)(exports["Tile"]["E"]))(exports["Vec"]["_∷_"]((((5 + 1) + 1) + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"](((5 + 1) + 1))(exports["Tile"]["O"])(exports["Vec"]["_∷_"]((5 + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"](5)(exports["Tile"]["W"])(exports["rep"]("*")(5)(exports["Tile"]["O"]))))))))(exports["Vec"]["_∷_"](((((((((((((0 + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1))(exports["mkRow"](exports["_++_"]("*")(5)(9)(exports["rep"]("*")(5)(exports["Tile"]["E"]))(exports["Vec"]["_∷_"](((((4 + 1) + 1) + 1) + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"]((((4 + 1) + 1) + 1))(exports["Tile"]["O"])(exports["Vec"]["_∷_"](((4 + 1) + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"]((4 + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"](4)(exports["Tile"]["O"])(exports["rep"]("*")(4)(exports["Tile"]["W"])))))))))(exports["Vec"]["_∷_"]((((((((((((0 + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1))(exports["mkRow"](exports["_++_"]("*")(6)(8)(exports["rep"]("*")(6)(exports["Tile"]["W"]))(exports["Vec"]["_∷_"]((((4 + 1) + 1) + 1))(exports["Tile"]["O"])(exports["Vec"]["_∷_"](((4 + 1) + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"]((4 + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"](4)(exports["Tile"]["O"])(exports["rep"]("*")(4)(exports["Tile"]["W"]))))))))(exports["Vec"]["_∷_"](((((((((((0 + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1))(exports["mkRow"](exports["Vec"]["_∷_"](13)(exports["Tile"]["W"])(exports["_++_"]("*")(12)((0 + 1))(exports["rep"]("*")(12)(exports["Tile"]["O"]))(exports["Vec"]["_∷_"](0)(exports["Tile"]["W"])(exports["Vec"]["[]"])))))(exports["Vec"]["_∷_"]((((((((((0 + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1))(exports["mkRow"](exports["Vec"]["_∷_"](13)(exports["Tile"]["W"])(exports["Vec"]["_∷_"]((4 + ((5 + ((0 + 1) + 1)) + 1)))(exports["Tile"]["O"])(exports["_++_"]("*")(4)(((5 + ((0 + 1) + 1)) + 1))(exports["rep"]("*")(4)(exports["Tile"]["W"]))(exports["Vec"]["_∷_"]((5 + ((0 + 1) + 1)))(exports["Tile"]["O"])(exports["_++_"]("*")(5)(((0 + 1) + 1))(exports["rep"]("*")(5)(exports["Tile"]["W"]))(exports["Vec"]["_∷_"]((0 + 1))(exports["Tile"]["O"])(exports["Vec"]["_∷_"](0)(exports["Tile"]["W"])(exports["Vec"]["[]"])))))))))(exports["Vec"]["_∷_"](((((((((0 + 1) + 1) + 1) + 1) + 1) + 1) + 1) + 1))(exports["mkRow"](exports["Vec"]["_∷_"](13)(exports["Tile"]["W"])(exports["Vec"]["_∷_"]((4 + ((5 + ((0 + 1) + 1)) + 1)))(exports["Tile"]["O"])(exports["_++_"]("*")(4)(((5 + ((0 + 1) + 1)) + 1))(exports["rep"]("*")(4)(exports["Tile"]["W"]))(exports["Vec"]["_∷_"]((5 + ((0 + 1) + 1)))(exports["Tile"]["O"])(exports["_++_"]("*")(5)(((0 + 1) + 1))(exports["rep"]("*")(5)(exports["Tile"]["W"]))(exports["Vec"]["_∷_"]((0 + 1))(exports["Tile"]["O"])(exports["Vec"]["_∷_"](0)(exports["Tile"]["W"])(exports["Vec"]["[]"])))))))))(exports["Vec"]["_∷_"]((((((((0 + 1) + 1) + 1) + 1) + 1) + 1) + 1))(exports["mkRow"](exports["Vec"]["_∷_"](13)(exports["Tile"]["W"])(exports["_++_"]("*")(3)(((8 + 1) + 1))(exports["rep"]("*")(3)(exports["Tile"]["O"]))(exports["Vec"]["_∷_"]((8 + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"](8)(exports["Tile"]["W"])(exports["rep"]("*")(8)(exports["Tile"]["O"])))))))(exports["Vec"]["_∷_"](((((((0 + 1) + 1) + 1) + 1) + 1) + 1))(exports["mkRow"](exports["_++_"]("*")(3)(11)(exports["rep"]("*")(3)(exports["Tile"]["W"]))(exports["Vec"]["_∷_"](((((((4 + 1) + 1) + 1) + 1) + 1) + 1))(exports["Tile"]["O"])(exports["Vec"]["_∷_"]((((((4 + 1) + 1) + 1) + 1) + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"](((((4 + 1) + 1) + 1) + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"]((((4 + 1) + 1) + 1))(exports["Tile"]["O"])(exports["Vec"]["_∷_"](((4 + 1) + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"]((4 + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"](4)(exports["Tile"]["O"])(exports["rep"]("*")(4)(exports["Tile"]["W"])))))))))))(exports["Vec"]["_∷_"]((((((0 + 1) + 1) + 1) + 1) + 1))(exports["mkRow"](exports["_++_"]("*")(3)(11)(exports["rep"]("*")(3)(exports["Tile"]["W"]))(exports["Vec"]["_∷_"](((((((4 + 1) + 1) + 1) + 1) + 1) + 1))(exports["Tile"]["O"])(exports["Vec"]["_∷_"]((((((4 + 1) + 1) + 1) + 1) + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"](((((4 + 1) + 1) + 1) + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"]((((4 + 1) + 1) + 1))(exports["Tile"]["O"])(exports["Vec"]["_∷_"](((4 + 1) + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"]((4 + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"](4)(exports["Tile"]["O"])(exports["rep"]("*")(4)(exports["Tile"]["W"])))))))))))(exports["Vec"]["_∷_"](((((0 + 1) + 1) + 1) + 1))(exports["mkRow"](exports["Vec"]["_∷_"](13)(exports["Tile"]["W"])(exports["_++_"]("*")(6)((((4 + (0 + 1)) + 1) + 1))(exports["rep"]("*")(6)(exports["Tile"]["O"]))(exports["Vec"]["_∷_"](((4 + (0 + 1)) + 1))(exports["Tile"]["W"])(exports["Vec"]["_∷_"]((4 + (0 + 1)))(exports["Tile"]["W"])(exports["_++_"]("*")(4)((0 + 1))(exports["rep"]("*")(4)(exports["Tile"]["O"]))(exports["Vec"]["_∷_"](0)(exports["Tile"]["W"])(exports["Vec"]["[]"]))))))))(exports["Vec"]["_∷_"]((((0 + 1) + 1) + 1))(exports["mkRow"](exports["Vec"]["_∷_"](13)(exports["Tile"]["W"])(exports["Vec"]["_∷_"]((10 + ((0 + 1) + 1)))(exports["Tile"]["O"])(exports["_++_"]("*")(10)(((0 + 1) + 1))(exports["rep"]("*")(10)(exports["Tile"]["W"]))(exports["Vec"]["_∷_"]((0 + 1))(exports["Tile"]["O"])(exports["Vec"]["_∷_"](0)(exports["Tile"]["W"])(exports["Vec"]["[]"])))))))(exports["Vec"]["_∷_"](((0 + 1) + 1))(exports["mkRow"](exports["Vec"]["_∷_"](13)(exports["Tile"]["W"])(exports["Vec"]["_∷_"]((10 + ((0 + 1) + 1)))(exports["Tile"]["O"])(exports["_++_"]("*")(10)(((0 + 1) + 1))(exports["rep"]("*")(10)(exports["Tile"]["W"]))(exports["Vec"]["_∷_"]((0 + 1))(exports["Tile"]["O"])(exports["Vec"]["_∷_"](0)(exports["Tile"]["W"])(exports["Vec"]["[]"])))))))(exports["Vec"]["_∷_"]((0 + 1))(exports["mkRow"](exports["Vec"]["_∷_"](13)(exports["Tile"]["W"])(exports["rep"]("*")(13)(exports["Tile"]["O"]))))(exports["Vec"]["_∷_"](0)(exports["rep"]("*")(28)(exports["Tile"]["W"]))(exports["Vec"]["[]"])))))))))))))))))))))))))))))));
  exports["Points"] = "*";
  exports["main"] = exports["_>>=_"]("*")("*")(jAgda_JS["JSCmd"]["getCanvas"])(function (x0) {
      return exports["_>>=_"]("*")("*")(jAgda_JS["JSCmd"]["getCtx"](x0))(function (x1) {
        return exports["_>>_"]("*")(exports["printGS"](x1)(exports["initGS"])(exports["Maybe"]["nothing"]))(exports["_>>=_"](function (x2) {
          return "*";
        })("*")(jAgda_JS["JSCmd"]["mkRef"]("*")(exports["initGS"]))(function (x2) {
          return jAgda_JS["JSCmd"]["addEventListner"](exports["update"](x1)(x2));
        }));
      });
    });
  exports["blue"] = "#006aa7";
  exports["white"] = "#ffffff";
  exports["initGS"] = exports["GameState"]["GS"](exports["maze"])(exports["¡_"](31)(1)(jAgda_JS["⊤"]["<>"]))(exports["¡_"](28)(1)(jAgda_JS["⊤"]["<>"]))(0);
  });
