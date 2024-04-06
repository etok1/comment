interface User {
  name: string;
  surname: string;
  imgUrl: string;
}

function changeFave(color: string): void {
  const changeFav = document.querySelector<SVGElement>(".comment__fav-change");
  if (changeFav) {
    const pathElement = changeFav.querySelector<SVGPathElement>("path");
    console.log("i hope");
    if (pathElement) {
      changeFav.addEventListener("click", () => {
        console.log("hiiiiii i,, hrrte");
        pathElement.setAttribute("fill", color);
      });
    } else {
      console.log("pathElement does not exist");
    }
  } else {
    console.log("changeFav does not exist");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const commentCont: HTMLElement | null =
    document.querySelector(".comment__other");

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
      console.log(item.name.first);
      let commentSection = document.createElement("div");
      commentSection.classList.add("comment__other-cont");
      commentSection.innerHTML = `
          <img class="user__image" src="${item.picture.medium}" alt="user" />
          <div class="comment__other-input">
              <div class="comment__other-name">
                  <h1>${item.name.first} ${item.name.last}</h1>
                  <span class="date"></span>
              </div>
              <div class="comment__other-space">
                  <h2>
                     hhoooooooooooooooooooooo
                  </h2>
                  <div class="comment__other-func">
                      <div class="comment__other-func-act">
                          <img class="comment__reply-img" src="./src/assets/4.svg" alt="reply" />
                          <p>Ответить</p>
                      </div>
                      <div class="comment__other-func-act">
                        <svg class="comment__fav-change" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <mask id="mask0_3_291" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="url(#pattern0)"/>
                          </mask>
                          <g mask="url(#mask0_3_291)">
                            <rect opacity="0.4" x="2" y="4" width="21" height="19" fill="black"/>
                            <path d="M3.5 9.00004C2.5 12.9999 8.83333 17.3333 12 20C20 14.4 21.1667 10.5001 20.5 9.00004C18.5 4.20004 13.8333 6.16667 12 8.00001C7 3.5 4.5 6.50002 3.5 9.00004Z" fill="white"/>
                          </g>
                          <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_3_291" transform="scale(0.0104167)"/>
                            </pattern>
                            <image id="image0_3_291" width="96" height="96" xlink:href="data:image/png;base64,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"/>
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
          </div>`;

      commentCont.appendChild(commentSection);
    });

    // rating
    const minusBtn: HTMLElement | null = document.querySelector(
      ".comment__btn-minus"
    );
    const plusBtn: HTMLElement | null =
      document.querySelector(".comment__btn-plus");

    const countSpan: HTMLElement | null =
      document.querySelector(".comment__count");
    let count: number = 0;

    if (minusBtn && plusBtn && countSpan) {
      minusBtn.addEventListener("click", () => {
        count -= 1;
        console.log(count.toString());
        countSpan.textContent = count.toString();
        if (count > 0) {
          countSpan.style.color = "green";
        } else if (count < 0) {
          countSpan.style.color = "red";
        } else {
          countSpan.style.color = "black";
        }
      });
      plusBtn.addEventListener("click", () => {
        count += 1;
        console.log(count.toString());
        countSpan.textContent = count.toString();
        if (count > 0) {
          countSpan.style.color = "green";
        } else if (count < 0) {
          countSpan.style.color = "red";
        } else {
          countSpan.style.color = "black";
        }
      });
    } else {
      console.error("Buttons not found!");
    }
  }

  renderData();
  // sort dropdown

  const select: HTMLElement = <HTMLElement>(
    document.querySelector(".comment__select")
  );
  const arrow: HTMLElement = <HTMLElement>document.querySelector(".arrow");

  const menu: HTMLElement = <HTMLElement>(
    document.querySelector(".comment__menu")!
  );

  const options = document.querySelectorAll(
    ".comment__menu li"
  ) as NodeListOf<HTMLElement>;

  const selected: HTMLElement = <HTMLElement>(
    document.querySelector(".comment__selected")
  );

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    arrow.classList.toggle("arrow-rotate");
    menu.classList.toggle("comment__menu-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      arrow.classList.remove("arrow-rotate");
      menu.classList.remove("comment__menu-open");

      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });

  // user name
  const user: User = {
    name: "John",
    surname: "Doe",
    imgUrl: "./src/assets/face1.png",
  };

  const userContInput: HTMLElement | null = document.querySelector(
    ".comment__user-name"
  );

  const userName: HTMLElement | null = document.querySelector(".comment__name");

  const userImage: HTMLElement | null = document.querySelector(
    ".comment__user-image"
  );

  if (userContInput) {
    if (userImage && userName) {
      userImage.setAttribute("src", user.imgUrl);
      console.log(userImage);
      userName.innerText = user.name + " " + user.surname;
    }
  }

  // user comment input
  const commentInput: HTMLInputElement | null = document.querySelector(
    ".comment__input-form"
  );
  const commentBtn: HTMLElement | null = document.querySelector(
    ".comment__input-btn"
  );

  if (commentCont) {
    if (commentInput && commentBtn) {
      commentInput.addEventListener("input", function () {
        const span: HTMLElement | null = document.querySelector(
          ".comment__user-input-limit"
        );
        if (span) {
          const textLength = commentInput.value.length;
          span.innerText = textLength + "/1000";
          console.log(textLength);
          if (textLength >= 1000) {
            span.style.color = "red";
            commentBtn.classList.remove("abled");
            commentBtn.classList.add("disabled");
          } else {
            commentBtn.classList.remove("disabled");
            commentBtn.classList.add("abled");
            span.style.color = "#a1a1a1";
          }
        }
      });

      commentBtn.addEventListener("click", (event) => {
        if (commentBtn.classList.contains("disabled")) {
          event.preventDefault();
          console.log("Button is disabled. Action prevented.");
        } else {
          const commentText = commentInput.value.trim();
          console.log(commentText);
          if (commentText !== "") {
            console.log(commentText);

            let commentSection = document.createElement("div");
            commentSection.classList.add("comment__other-cont");
            commentSection.innerHTML = `
              <img src="${user.imgUrl}" alt="user" />
              <div class="comment__other-input">
                  <div class="comment__other-name">
                      <h1>${user.name} ${user.surname}</h1>
                      <span class="date"></span>
                  </div>
                  <div class="comment__other-space">
                      <h2>
                         ${commentText}
                      </h2>
                      <div class="comment__other-func">
                          <div class="comment__other-func-act">
                              <img src="./src/assets/4.svg" alt="reply" />
                              <p>Ответить</p>
                          </div>
                          <div class="comment__other-func-act">
                            <svg class="comment__fav-change" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                              <mask id="mask0_3_291" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <rect width="24" height="24" fill="url(#pattern0)"/>
                              </mask>
                              <g mask="url(#mask0_3_291)">
                                <rect opacity="0.4" x="2" y="4" width="21" height="19" fill="black"/>
                                <path d="M3.5 9.00004C2.5 12.9999 8.83333 17.3333 12 20C20 14.4 21.1667 10.5001 20.5 9.00004C18.5 4.20004 13.8333 6.16667 12 8.00001C7 3.5 4.5 6.50002 3.5 9.00004Z" fill="white"/>
                              </g>
                              <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_3_291" transform="scale(0.0104167)"/>
                                </pattern>
                                <image id="image0_3_291" width="96" height="96" xlink:href="data:image/png;base64,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"/>
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
              </div>`;

            commentCont.appendChild(commentSection);
            commentInput.value = "";
          }
          console.log("Button is enabled. Performing action...");
        }
      });

      //reply user
      const replyCont: HTMLInputElement | null = document.querySelector(
        ".comment__reply-user"
      );

      const userReply: HTMLInputElement | null = document.querySelector(
        ".comment__reply-img"
      );

      if (userReply) {
        if (replyCont) {
          commentBtn.addEventListener("click", () => {
            const commentText = commentInput.value.trim();
            console.log(commentText);
            if (commentText !== "") {
              console.log(commentText);

              let commentSection = document.createElement("div");
              commentSection.classList.add("comment__reply");
              commentSection.innerHTML = `
                <img src="./src/assets/face1.png" alt="user" />
                <div class="comment__other-input">
                    <div class="comment__other-name">
                        <h1>Максим Авдеенко</h1>
                        <span class="date"></span>
                    </div>
                    <div class="comment__other-space">
                        <h2>
                           ${commentText}
                        </h2>
                        <div class="comment__other-func">
                            <div class="comment__other-func-act">
                                <img src="./src/assets/4.svg" alt="reply" />
                                <p>Ответить</p>
                            </div>
                            <div class="comment__other-func-act">
                                <img src="./src/assets/3.svg" alt="reply" />
                                <p>В избранном</p>
                            </div>
                            <div class="comment__other-func-act">
                                <button class="comment__btn-minus">-</button>
                                <span class="comment__count">0</span>
                                <button class="comment__btn-plus">+</button>
                            </div>
                        </div>
                    </div>
                </div>`;

              commentCont.appendChild(commentSection);
              commentInput.value = "";
            }
          });
        }
      }
    }
  }

  // adding to fav

  changeFave("#a1a1a1");
});
