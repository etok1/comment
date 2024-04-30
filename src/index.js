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
var UserClass = /** @class */ (function () {
    function UserClass(name, surname, imgUrl) {
        this.name = name;
        this.surname = surname;
        this.imgUrl = imgUrl;
    }
    return UserClass;
}());
var CommentClass = /** @class */ (function () {
    function CommentClass(text, author, rating, date, isFav, replies) {
        this.text = text;
        this.author = author;
        this.rating = rating;
        this.date = date;
        this.isFav = isFav;
        this.replies = replies;
    }
    CommentClass.prototype.increaseRating = function () {
        this.rating++;
    };
    CommentClass.prototype.decreaseRating = function () {
        this.rating--;
    };
    CommentClass.prototype.toggleFav = function () {
        this.isFav = !this.isFav;
        return this.isFav;
    };
    CommentClass.prototype.addReply = function (count) {
        count += 1;
        return count;
    };
    return CommentClass;
}());
var comments = [];
var commentCont = document.querySelector(".comment__other");
var text = "Самое обидное когда сценарий по сути есть - в виде книг, где нет сюжетных дыр, всё логично, стройное повествование и достаточно взять и экранизировать оригинал как это было в первых фильмах с минимальным количеством отсебятины и зритель с восторгом примет любой такой фильм и сериал, однако вместо этого 'Кольца власти' просто позаимствовали имена из оригинала, куски истории, мало связанные между собой и выдали очередной среднячковый сериал на один раз в лучшем случае.";
var userContInput = document.querySelector(".comment__user-name");
var userName = document.querySelector(".comment__name");
var userImage = document.querySelector(".comment__user-image");
var commentInput = document.querySelector(".comment__input-form");
var commentBtn = document.querySelector(".comment__input-btn");
function toggleFavorite(comment) {
    comment.toggleFav();
    console.log("added to fav: " + comment.toggleFav());
}
function changeFave(color, comment, container, array) {
    if (comment && container) {
        var changeFav = container.querySelector(".comment__fav-change");
        if (changeFav) {
            var pathElement_1 = changeFav.querySelector("path");
            if (pathElement_1) {
                changeFav.addEventListener("click", function () {
                    console.log(pathElement_1.getAttribute("fill"));
                    if (pathElement_1.getAttribute("fill") === "white") {
                        console.log("hiiiiii i,, hrrte");
                        pathElement_1.setAttribute("fill", color);
                        console.log(pathElement_1.getAttribute("fill"));
                        if (comment) {
                            var newFavState = comment.toggleFav();
                            console.log("right clicked " + newFavState);
                            var getValue = localStorage.getItem("comments");
                            if (getValue) {
                                var changeValues = JSON.parse(getValue);
                                console.log(changeValues);
                                changeValues.forEach(function (changeValue) {
                                    if (changeValue.author.name === comment.author.name) {
                                        changeValue.isFav = true;
                                        console.log(changeValue.isFav);
                                    }
                                });
                                localStorage.setItem("comments", JSON.stringify(array));
                            }
                        }
                    }
                    else {
                        pathElement_1.getAttribute("fill");
                        pathElement_1.setAttribute("fill", "white");
                        if (comment) {
                            var newFavState = comment.toggleFav();
                            console.log("right clicked " + newFavState);
                            var getValue = localStorage.getItem("comments");
                            if (getValue) {
                                var changeValues = JSON.parse(getValue);
                                console.log(changeValues);
                                changeValues.forEach(function (changeValue) {
                                    if (changeValue.author.name === comment.author.name) {
                                        changeValue.isFav = false;
                                        console.log(changeValue.isFav);
                                    }
                                });
                                localStorage.setItem("comments", JSON.stringify(array));
                            }
                        }
                    }
                });
            }
            else {
                console.log("pathElement does not exist");
            }
        }
        else {
            console.log("changeFav does not exist");
        }
    }
}
function changeAmount() {
    var numberOfComm = document.querySelector(".amount-comment");
    if (numberOfComm) {
        var amount = comments.length;
        numberOfComm.innerHTML = amount.toString();
    }
}
function rating(comment, container) {
    var minusBtn = container.querySelector(".comment__btn-minus");
    var plusBtn = container.querySelector(".comment__btn-plus");
    var countSpan = container.querySelector(".comment__count");
    if (minusBtn && plusBtn && countSpan) {
        minusBtn.addEventListener("click", function () {
            comment.decreaseRating();
            updateRatingDisplay(comment, countSpan);
            minusBtn.disabled = true;
        });
        plusBtn.addEventListener("click", function () {
            comment.increaseRating();
            updateRatingDisplay(comment, countSpan);
            plusBtn.disabled = true;
        });
    }
    else {
        console.error("Buttons not found!");
    }
}
function renderUserComment(comment, date, inputCont, commentCont, btn) {
    var commentSection = document.createElement("div");
    commentSection.classList.add("comment__other-cont");
    commentSection.innerHTML = "\n  <div class=\"comment__other-image\">\n    <img class=\"comment__img\" src=\"".concat(comment.author.imgUrl, "\" alt=\"user\" />\n    <div class=\"comment__other-input\">\n      <div class=\"comment__other-name\">\n        <h1>").concat(comment.author.name, " ").concat(comment.author.surname, "</h1>\n        <span class=\"date\">").concat(date, "</span>\n      </div>\n      <div class=\"comment__other-space\">\n        <h2>").concat(comment.text, "</h2>\n        <div class=\"comment__other-func\">\n          <div class=\"comment__other-func-act\">\n            <img class=\"comment__reply-btn\" src=\"./src/assets/4.svg\" alt=\"reply\" />\n            <p>\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C</p>\n          </div>\n          <div class=\"comment__other-func-act\">\n            <svg\n              class=\"comment__fav-change\"\n              width=\"24\"\n              height=\"24\"\n              viewBox=\"0 0 24 24\"\n              fill=\"none\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n            >\n              <mask\n                id=\"mask0_3_291\"\n                style=\"mask-type: alpha\"\n                maskUnits=\"userSpaceOnUse\"\n                x=\"0\"\n                y=\"0\"\n                width=\"24\"\n                height=\"24\"\n              >\n                <rect width=\"24\" height=\"24\" fill=\"url(#pattern0)\" />\n              </mask>\n              <g mask=\"url(#mask0_3_291)\">\n                <rect\n                  opacity=\"0.4\"\n                  x=\"2\"\n                  y=\"4\"\n                  width=\"21\"\n                  height=\"19\"\n                  fill=\"black\"\n                />\n                <path\n                  d=\"M3.5 9.00004C2.5 12.9999 8.83333 17.3333 12 20C20 14.4 21.1667 10.5001 20.5 9.00004C18.5 4.20004 13.8333 6.16667 12 8.00001C7 3.5 4.5 6.50002 3.5 9.00004Z\"\n                  fill=\"white\"\n                />\n              </g>\n              <defs>\n                <pattern\n                  id=\"pattern0\"\n                  patternContentUnits=\"objectBoundingBox\"\n                  width=\"1\"\n                  height=\"1\"\n                >\n                  <use\n                    xlink:href=\"#image0_3_291\"\n                    transform=\"scale(0.0104167)\"\n                  />\n                </pattern>\n                <image\n                  id=\"image0_3_291\"\n                  width=\"96\"\n                  height=\"96\"\n                  xlink:href=\"data:image/png;base64,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\"\n                />\n              </defs>\n            </svg>\n            <p>\u0412 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u043C</p>\n          </div>\n          <div class=\"comment__other-func-act\">\n            <button class=\"comment__btn-minus\">-</button>\n            <span class=\"comment__count\">0</span>\n            <button class=\"comment__btn-plus\">+</button>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n<div class=\"comment__reply-user\"></div>\n");
    commentCont.appendChild(commentSection);
    changeFave("#a1a1a1", comment, commentSection, comments);
    rating(comment, commentSection);
    localStorage.setItem("comments", JSON.stringify(comments));
    console.log(commentCont);
    btn.classList.remove("abled");
    btn.classList.add("disabled");
    inputCont.value = "";
}
function formattedDate(date) {
    var day = date.getDate().toString().padStart(2, "0");
    var month = (date.getMonth() + 1).toString().padStart(2, "0");
    var hours = date.getHours().toString().padStart(2, "0");
    var minutes = date.getMinutes().toString().padStart(2, "0");
    var formattedDate = "".concat(day, ".").concat(month, " ").concat(hours, ":").concat(minutes);
    return formattedDate;
}
function renderReply(comment, date, inputCont, commentCont, btn) {
    var commentSection = document.createElement("div");
    commentSection.classList.add("comment__reply");
    commentSection.innerHTML = "\n\n    <img src=\"".concat(comment.author.imgUrl, "\" alt=\"reply\" />\n    <div class=\"comment__reply-input\">\n      <div class=\"comment__reply-name\">\n        <h1>").concat(comment.author.name, " ").concat(comment.author.surname, "</h1>\n        <span class=\"date\">").concat(date, "</span>\n        <div class=\"comment__reply-names\">\n          <img src=\"./src/assets/4.svg\" alt=\"reply\" />\n          <p>\u041C\u0430\u043A\u0441\u0438\u043C \u0410\u0432\u0434\u0435\u0435\u043D\u043A\u043E</p>\n        </div>\n      </div>\n        <div class=\"comment__reply-space\">\n          <h2>\n            ").concat(inputCont, "\n          </h2>\n          <div class=\"comment__reply-func\">\n            <div class=\"comment__reply-func-act\">\n              <button class=\"comment__btn-minus\">-</button>\n              <span class=\"comment__count\">0</span>\n              <button class=\"comment__btn-plus\">+</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n ");
    commentCont.appendChild(commentSection);
    btn.classList.remove("abled");
    btn.classList.add("disabled");
    inputCont.value = "";
}
function updateRatingDisplay(comment, countSpan) {
    countSpan.textContent = comment.rating.toString();
    if (comment.rating > 0) {
        countSpan.style.color = "green";
    }
    else if (comment.rating < 0) {
        countSpan.style.color = "red";
    }
    else {
        countSpan.style.color = "black";
    }
}
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
                    return [2 /*return*/];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderData() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!commentCont) {
                        console.error("Unable to find the comment container.");
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, fetchData()];
                case 1:
                    data = _a.sent();
                    if (!data) {
                        return [2 /*return*/];
                    }
                    data.forEach(function (item) {
                        var user = new UserClass(item.name.first, item.name.last, item.picture.medium);
                        var commentDate = new Date(item.registered.date);
                        var formattedNow = formattedDate(commentDate);
                        var comment = new CommentClass(item.text, user, 0, formattedNow, false, 0);
                        comments.push(comment);
                        changeAmount();
                        console.log(comment);
                        var commentSection = renderComment(comment);
                        if (commentSection) {
                            commentCont.appendChild(commentSection);
                            changeFave("#a1a1a1", comment, commentSection, comments);
                            rating(comment, commentSection);
                        }
                        console.log(comments);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function renderComment(comment) {
    var commentSection = document.createElement("div");
    commentSection.classList.add("comment__other-cont");
    commentSection.innerHTML = "\n    <div class=\"comment__other-image\">\n      <img class=\"comment__img\" src=\"".concat(comment.author.imgUrl, "\" alt=\"user\" />\n      <div class=\"comment__other-input\">\n        <div class=\"comment__other-name\">\n          <h1>").concat(comment.author.name, " ").concat(comment.author.surname, "</h1>\n          <span class=\"date\">").concat(comment.date, "</span>\n        </div>\n        <div class=\"comment__other-space\">\n          <h2>").concat(text, "</h2>\n          <div class=\"comment__other-func\">\n            <div class=\"comment__other-func-act\">\n              <img class=\"comment__reply-btn\" src=\"./src/assets/4.svg\" alt=\"reply\" />\n              <p>\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C</p>\n            </div>\n            <div class=\"comment__other-func-act\">\n              <svg\n                class=\"comment__fav-change\"\n                width=\"24\"\n                height=\"24\"\n                viewBox=\"0 0 24 24\"\n                fill=\"none\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n                xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n              >\n                <mask\n                  id=\"mask0_3_291\"\n                  style=\"mask-type: alpha\"\n                  maskUnits=\"userSpaceOnUse\"\n                  x=\"0\"\n                  y=\"0\"\n                  width=\"24\"\n                  height=\"24\"\n                >\n                  <rect width=\"24\" height=\"24\" fill=\"url(#pattern0)\" />\n                </mask>\n                <g mask=\"url(#mask0_3_291)\">\n                  <rect\n                    opacity=\"0.4\"\n                    x=\"2\"\n                    y=\"4\"\n                    width=\"21\"\n                    height=\"19\"\n                    fill=\"black\"\n                  />\n                  <path\n                    d=\"M3.5 9.00004C2.5 12.9999 8.83333 17.3333 12 20C20 14.4 21.1667 10.5001 20.5 9.00004C18.5 4.20004 13.8333 6.16667 12 8.00001C7 3.5 4.5 6.50002 3.5 9.00004Z\"\n                    fill=\"white\"\n                  />\n                </g>\n                <defs>\n                  <pattern\n                    id=\"pattern0\"\n                    patternContentUnits=\"objectBoundingBox\"\n                    width=\"1\"\n                    height=\"1\"\n                  >\n                    <use\n                      xlink:href=\"#image0_3_291\"\n                      transform=\"scale(0.0104167)\"\n                    />\n                  </pattern>\n                  <image\n                    id=\"image0_3_291\"\n                    width=\"96\"\n                    height=\"96\"\n                    xlink:href=\"data:image/png;base64,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\"\n                  />\n                </defs>\n              </svg>\n              <p>\u0412 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u043C</p>\n            </div>\n            <div class=\"comment__other-func-act\">\n              <button class=\"comment__btn-minus\">-</button>\n              <span class=\"comment__count\">0</span>\n              <button class=\"comment__btn-plus\">+</button>\n            </div>\n          </div>\n        </div>\n      </div>\n</div>\n<div class=\"comment__reply-user\"></div>\n            ");
    return commentSection;
}
function userCommenting(user) {
    if (userContInput) {
        if (userImage && userName) {
            userImage.setAttribute("src", user.imgUrl);
            console.log(userImage);
            userName.innerText = user.name + " " + user.surname;
        }
    }
    if (commentCont) {
        if (commentInput && commentBtn) {
            commentInput.addEventListener("input", function () {
                var span = document.querySelector(".comment__user-input-limit");
                if (span) {
                    var textLength = commentInput.value.length;
                    span.innerText = textLength + "/1000";
                    if (textLength >= 1000) {
                        span.style.color = "red";
                        commentBtn.classList.remove("abled");
                        commentBtn.classList.add("disabled");
                    }
                    else if (textLength === 0) {
                        commentBtn.classList.remove("abled");
                        commentBtn.classList.add("disabled");
                    }
                    else {
                        commentBtn.classList.remove("disabled");
                        commentBtn.classList.add("abled");
                        span.style.color = "#a1a1a1";
                    }
                }
            });
            commentBtn.addEventListener("click", function (event) {
                if (commentBtn.classList.contains("disabled")) {
                    event.preventDefault();
                    console.log("Button is disabled. Action prevented.");
                }
                else {
                    var commentText = commentInput.value.trim();
                    console.log(commentText);
                    if (commentText !== "") {
                        var dateUser = new Date();
                        var formattedDateUser = formattedDate(dateUser);
                        var newComment = new CommentClass(commentText, user, 0, formattedDateUser, false, 0);
                        renderUserComment(newComment, formattedDateUser, commentInput, commentCont, commentBtn);
                        comments.push(newComment);
                        var newDate = new Date(newComment.date);
                        console.log(newDate);
                        changeAmount();
                        var savedComments = localStorage.setItem("comments", JSON.stringify(comments));
                        console.log(savedComments);
                        console.log(comments);
                    }
                    console.log("Button is enabled. Performing action...");
                }
            });
        }
    }
}
function dateFilter() {
    if (!commentCont || !Array.isArray(comments)) {
        console.warn("Invalid comment container or comments array:", commentCont, comments);
        return;
    }
    if (commentCont) {
        comments.sort(function (a, b) {
            var dateA = new Date(a.date);
            var dateB = new Date(b.date);
            return dateB.getTime() - dateA.getTime();
        });
        commentCont.innerHTML = "";
        console.log(comments + "hope it works");
        comments.forEach(function (comment) {
            renderComment(comment);
            console.log(comment);
        });
    }
}
function dropdownFilter() {
    var select = (document.querySelector(".comment__select"));
    var arrow = document.querySelector(".arrow");
    var menu = (document.querySelector(".comment__menu"));
    var options = document.querySelectorAll(".comment__menu li");
    var selected = (document.querySelector(".comment__selected"));
    select.addEventListener("click", function () {
        select.classList.toggle("select-clicked");
        arrow.classList.toggle("arrow-rotate");
        menu.classList.toggle("comment__menu-open");
    });
    options.forEach(function (option) {
        option.addEventListener("click", function () {
            selected.innerText = option.innerText;
            select.classList.remove("select-clicked");
            arrow.classList.remove("arrow-rotate");
            menu.classList.remove("comment__menu-open");
            options.forEach(function (option) {
                option.classList.remove("active");
            });
            option.classList.add("active");
        });
    });
}
function filtering() {
    var menuOptions = document.querySelectorAll(".comment__menu-option");
    menuOptions.forEach(function (option) {
        option.addEventListener("click", function () {
            var filterType = option.getAttribute("data-filter");
            if (filterType === "date") {
                console.log("date filter");
                dateFilter();
            }
            else if (filterType === "rating") {
                console.log("rating");
                // filterCommentsByRating();
            }
            else if (filterType === "replies") {
                // filterCommentsByReplies();
                console.log("replies");
            }
            // menuOptions.forEach((opt) => opt.classList.remove("active"));
            // option.classList.add("active");
        });
    });
}
document.addEventListener("DOMContentLoaded", function () {
    var user = {
        name: "John",
        surname: "Doe",
        imgUrl: "./src/assets/face1.png",
    };
    renderData();
    userCommenting(user);
    dropdownFilter();
    filtering();
    setTimeout(function () {
        localStorage.setItem("comments", JSON.stringify(comments));
        console.log(comments.length);
        var dates = comments.sort(function (a, b) {
            var dateA = new Date(a.date);
            var dateB = new Date(b.date);
            console.log("dateA:", dateA);
            return dateB.getTime() - dateA.getTime();
        });
        console.log(dates.length);
        var commentsFromLocalStorage = localStorage.getItem("comments");
        if (commentsFromLocalStorage) {
            var commentsSaved = JSON.parse(commentsFromLocalStorage);
            commentsSaved.forEach(function (comment) {
                console.log(comment);
                renderComment(comment);
            });
        }
    }, 1000);
});
