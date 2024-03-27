var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
document.addEventListener("DOMContentLoaded", function () {
    function fetchData() {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch("https://randomuser.me/api/")];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data.results];
                    case 3:
                        error_1 = _a.sent();
                        console.error("Error fetching data:", error_1);
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    function renderData() {
        return __awaiter(this, void 0, void 0, function () {
            var commentCont, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        commentCont = document.querySelector(".comment__other");
                        if (!commentCont) {
                            console.error("Unable to find the comment container element.");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, fetchData()];
                    case 1:
                        data = _a.sent();
                        if (!data) {
                            return [2 /*return*/];
                        }
                        data.forEach(function (item) {
                            console.log(item.name.first);
                            var commentSection = document.createElement("div");
                            commentSection.classList.add("comment__other-cont");
                            commentSection.innerHTML = "\n          <img src=\"./src/assets/face1.png\" alt=\"user\" />\n          <div class=\"comment__other-input\">\n              <div class=\"comment__other-name\">\n                  <h1>\u041C\u0430\u043A\u0441\u0438\u043C \u0410\u0432\u0434\u0435\u0435\u043D\u043A\u043E</h1>\n                  <span class=\"date\"></span>\n              </div>\n              <div class=\"comment__other-space\">\n                  <h2>\n                     \n                  </h2>\n                  <div class=\"comment__other-func\">\n                      <div class=\"comment__other-func-act\">\n                          <img src=\"./src/assets/4.svg\" alt=\"reply\" />\n                          <p>\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C</p>\n                      </div>\n                      <div class=\"comment__other-func-act\">\n                          <img src=\"./src/assets/3.svg\" alt=\"reply\" />\n                          <p>\u0412 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u043C</p>\n                      </div>\n                      <div class=\"comment__other-func-act\">\n                          <button class=\"comment__btn-minus\">-</button>\n                          <span class=\"comment__count\">0</span>\n                          <button class=\"comment__btn-plus\">+</button>\n                      </div>\n                  </div>\n              </div>\n          </div>";
                            commentCont.appendChild(commentSection);
                        });
                        return [2 /*return*/];
                }
            });
        });
    }
    var commentInput = document.querySelector(".comment__input-form");
    var commentBtn = document.querySelector(".comment__input-btn");
    if (commentInput && commentBtn) {
        commentBtn.addEventListener("click", function () {
            var commentText = commentInput.value.trim();
            console.log(commentText);
            if (commentText !== "") {
                console.log(commentText);
                renderData();
                commentInput.value = "";
            }
        });
    }
});
