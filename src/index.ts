interface User {
  name: string;
  surname: string;
  imgUrl: string;
}

interface Comment {
  text: string;
  author: User;
  rating: number;
  isFav: boolean;
}

class UserClass {
  name: string;
  surname: string;
  imgUrl: string;

  constructor(name: string, surname: string, imgUrl: string) {
    this.name = name;
    this.surname = surname;
    this.imgUrl = imgUrl;
  }
}

class CommentClass {
  text: string;
  author: User;
  rating: number;
  date: string;
  isFav: boolean;

  replies: number;

  constructor(
    text: string,
    author: User,
    rating: number,
    date: string,
    isFav: boolean,

    replies: number
  ) {
    this.text = text;
    this.author = author;
    this.rating = rating;
    this.date = date;
    this.isFav = isFav;
    this.replies = replies;
  }

  increaseRating(): void {
    this.rating++;
  }

  decreaseRating(): void {
    this.rating--;
  }

  toggleFav(): boolean {
    this.isFav = !this.isFav;
    return this.isFav;
  }

  addReply(count: number): number {
    count += 1;
    return count;
  }
}

function toggleFavorite(comment: CommentClass) {
  comment.toggleFav();
  console.log("added to fav: " + comment.toggleFav());
}

function changeFave(
  color: string,
  comment: CommentClass | undefined,
  array: Array<CommentClass>
): void {
  const changeFav = document.querySelector<SVGElement>(".comment__fav-change");
  if (changeFav) {
    const pathElement = changeFav.querySelector<SVGPathElement>("path");
    console.log("i hope");
    if (pathElement) {
      changeFav.addEventListener("click", () => {
        if (pathElement.getAttribute("fill") === "white") {
          console.log("hiiiiii i,, hrrte");
          pathElement.setAttribute("fill", color);
          if (comment) {
            let newFavState = comment.toggleFav();
            console.log("right clicked " + newFavState);
            const getValue: string | null = localStorage.getItem("comments");
            if (getValue) {
              const changeValues = JSON.parse(getValue);
              console.log(changeValues);
              changeValues.forEach((changeValue) => {
                if (changeValue.author.name === comment.author.name) {
                  changeValue.isFav = true;
                  console.log(changeValue.isFav);
                }
              });
              localStorage.setItem("comments", JSON.stringify(array));
            }
          }
        } else {
          console.log("it is else");
          pathElement.setAttribute("fill", "white");
          if (comment) {
            let newFavState = comment.toggleFav();
            console.log("another clicked " + newFavState);
          }
        }
      });
    } else {
      console.log("pathElement does not exist");
    }
  } else {
    console.log("changeFav does not exist");
  }
}

function renderUserComment(
  comment: CommentClass,
  date: string,
  inputCont: HTMLInputElement,
  commentCont: HTMLElement,
  btn: HTMLElement
): void {
  let commentSection = document.createElement("div");
  commentSection.classList.add("comment__other-cont");
  commentSection.innerHTML = `
  <div class="comment__other-image">
    <img class="comment__img" src="${comment.author.imgUrl}" alt="user" />
    <div class="comment__other-input">
      <div class="comment__other-name">
        <h1>${comment.author.name} ${comment.author.surname}</h1>
        <span class="date">${date}</span>
      </div>
      <div class="comment__other-space">
        <h2>${comment.text}</h2>
        <div class="comment__other-func">
          <div class="comment__other-func-act">
            <img class="comment__reply-btn" src="./src/assets/4.svg" alt="reply" />
            <p>Ответить</p>
          </div>
          <div class="comment__other-func-act">
            <svg
              class="comment__fav-change"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <mask
                id="mask0_3_291"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="url(#pattern0)" />
              </mask>
              <g mask="url(#mask0_3_291)">
                <rect
                  opacity="0.4"
                  x="2"
                  y="4"
                  width="21"
                  height="19"
                  fill="black"
                />
                <path
                  d="M3.5 9.00004C2.5 12.9999 8.83333 17.3333 12 20C20 14.4 21.1667 10.5001 20.5 9.00004C18.5 4.20004 13.8333 6.16667 12 8.00001C7 3.5 4.5 6.50002 3.5 9.00004Z"
                  fill="white"
                />
              </g>
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_3_291"
                    transform="scale(0.0104167)"
                  />
                </pattern>
                <image
                  id="image0_3_291"
                  width="96"
                  height="96"
                  xlink:href="data:image/png;base64,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"
                />
              </defs>
            </svg>
            <p>В избранном</p>
          </div>
          <div class="comment__other-func-act">
            <button class="comment__btn-minus">-</button>
            <span class="comment__count">0</span>
            <button class="comment__btn-plus">+</button>
          </div>
        </div>
      </div>
    </div>
</div>
<div class="comment__reply-user"></div>
`;

  commentCont.appendChild(commentSection);
  btn.classList.remove("abled");
  btn.classList.add("disabled");
  inputCont.value = "";
}

function formattedDate(date: Date): string {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const formattedDate = `${day}.${month} ${hours}:${minutes}`;

  return formattedDate;
}

// function filterComment(category, commentArray: Array<CommentClass>) {
//   const AllComments: NodeListOf<Element> = document.querySelectorAll(
//     ".comment__other-cont"
//   );

//   // Clear existing comments from the container
//   const commentContainer = document.querySelector(".comment__other");
//   commentContainer.innerHTML = "";

//   // Append sorted comments back to the container
//   commentsArray.forEach((comment) => {
//     commentContainer.appendChild(comment);
//   });

//   //   const menuOptions = document.querySelectorAll('.comment__menu-option');
//   // menuOptions.forEach(option => {
//   //   option.addEventListener('click', () => {
//   //     // Remove 'active' class from all options
//   //     menuOptions.forEach(opt => opt.classList.remove('active'));
//   //     // Add 'active' class to the clicked option
//   //     option.classList.add('active');
//   //     // Get the data-filter attribute to determine the sorting criteria
//   //     const filterCriteria = option.getAttribute('data-filter');
//   //     // Filter comments based on the selected criteria
//   //     filterComments(filterCriteria);
//   //   });
// }

function renderReply(
  comment: CommentClass,
  date: string,
  inputCont: HTMLInputElement,
  commentCont: HTMLElement,
  btn: HTMLElement
): void {
  let commentSection = document.createElement("div");
  commentSection.classList.add("comment__reply");
  commentSection.innerHTML = `

    <img src="${comment.author.imgUrl}" alt="reply" />
    <div class="comment__reply-input">
      <div class="comment__reply-name">
        <h1>${comment.author.name} ${comment.author.surname}</h1>
        <span class="date">${date}</span>
        <div class="comment__reply-names">
          <img src="./src/assets/4.svg" alt="reply" />
          <p>Максим Авдеенко</p>
        </div>
      </div>
        <div class="comment__reply-space">
          <h2>
            ${inputCont}
          </h2>
          <div class="comment__reply-func">
            <div class="comment__reply-func-act">
              <button class="comment__btn-minus">-</button>
              <span class="comment__count">0</span>
              <button class="comment__btn-plus">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
 `;

  commentCont.appendChild(commentSection);
  btn.classList.remove("abled");
  btn.classList.add("disabled");
  inputCont.value = "";
}

function updateRatingDisplay(comment, countSpan) {
  countSpan.textContent = comment.rating.toString();

  if (comment.rating > 0) {
    countSpan.style.color = "green";
  } else if (comment.rating < 0) {
    countSpan.style.color = "red";
  } else {
    countSpan.style.color = "black";
  }
}

const comments: CommentClass[] = [];
const commentCont: HTMLElement | null =
  document.querySelector(".comment__other");

const minusBtn: HTMLElement | null = document.querySelector(
  ".comment__btn-minus"
);
const plusBtn: HTMLElement | null =
  document.querySelector(".comment__btn-plus");

const countSpan: HTMLElement | null = document.querySelector(".comment__count");

const text =
  "Самое обидное когда сценарий по сути есть - в виде книг, где нет сюжетных дыр, всё логично, стройное повествование и достаточно взять и экранизировать оригинал как это было в первых фильмах с минимальным количеством отсебятины и зритель с восторгом примет любой такой фильм и сериал, однако вместо этого 'Кольца власти' просто позаимствовали имена из оригинала, куски истории, мало связанные между собой и выдали очередной среднячковый сериал на один раз в лучшем случае.";

document.addEventListener("DOMContentLoaded", function () {
  // everything
  async function fetchData() {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching data:", error);
      return;
    }
  }

  async function renderData() {
    if (!commentCont) {
      console.error("Unable to find the comment container.");
      return;
    }

    const data = await fetchData();

    if (!data) {
      return;
    }

    data.forEach((item: any) => {
      const user = new UserClass(
        item.name.first,
        item.name.last,
        item.picture.medium
      );

      console.log(user);

      const commentDate = new Date(item.registered.date);
      const formattedNow = formattedDate(commentDate);
      console.log(formattedNow);

      const comment: CommentClass = new CommentClass(
        item.text,
        user,
        0,
        formattedNow,
        false,
        0
      );

      console.log(comment);

      let commentSection = document.createElement("div");
      commentSection.classList.add("comment__other-cont");
      commentSection.innerHTML = `
      <div class="comment__other-image">
        <img class="comment__img" src="${comment.author.imgUrl}" alt="user" />
        <div class="comment__other-input">
          <div class="comment__other-name">
            <h1>${comment.author.name} ${comment.author.surname}</h1>
            <span class="date">${formattedNow}</span>
          </div>
          <div class="comment__other-space">
            <h2>${text}</h2>
            <div class="comment__other-func">
              <div class="comment__other-func-act">
                <img class="comment__reply-btn" src="./src/assets/4.svg" alt="reply" />
                <p>Ответить</p>
              </div>
              <div class="comment__other-func-act">
                <svg
                  class="comment__fav-change"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <mask
                    id="mask0_3_291"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="url(#pattern0)" />
                  </mask>
                  <g mask="url(#mask0_3_291)">
                    <rect
                      opacity="0.4"
                      x="2"
                      y="4"
                      width="21"
                      height="19"
                      fill="black"
                    />
                    <path
                      d="M3.5 9.00004C2.5 12.9999 8.83333 17.3333 12 20C20 14.4 21.1667 10.5001 20.5 9.00004C18.5 4.20004 13.8333 6.16667 12 8.00001C7 3.5 4.5 6.50002 3.5 9.00004Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlink:href="#image0_3_291"
                        transform="scale(0.0104167)"
                      />
                    </pattern>
                    <image
                      id="image0_3_291"
                      width="96"
                      height="96"
                      xlink:href="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
                <p>В избранном</p>
              </div>
              <div class="comment__other-func-act">
                <button class="comment__btn-minus">-</button>
                <span class="comment__count">0</span>
                <button class="comment__btn-plus">+</button>
              </div>
            </div>
          </div>
        </div>
  </div>
  <div class="comment__reply-user"></div>
              `;

      commentCont.appendChild(commentSection);

      comments.push(comment);
      console.log(comments);
      let savedComments = localStorage.setItem(
        "comments",
        JSON.stringify(comments)
      );
      console.log(savedComments);

      if (minusBtn && plusBtn && countSpan) {
        minusBtn.addEventListener("click", () => {
          comment.decreaseRating();
          updateRatingDisplay(comment, countSpan);
        });
        plusBtn.addEventListener("click", () => {
          comment.increaseRating();
          updateRatingDisplay(comment, countSpan);
        });
      } else {
        console.error("Buttons not found!");
      }
    });
  }

  renderData();
  console.log(comments);
  if (comments.length > 0) {
    comments.forEach((comment) => {
      console.log(comment);
      changeFave("#a1a1a1", comment, comments);
    });
  }
});
