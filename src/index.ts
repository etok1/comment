class User {
  name: string;
  surname: string;
  imgUrl: string;
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
          <img src="./src/assets/face1.png" alt="user" />
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
          console.log(textLength);
          if (textLength >= 1000) {
            span.style.color = "red";
            alert("You cant enter more than 1000 characters!");
          } else {
            span.style.color = "#a1a1a1";
          }
        }
      });
      commentBtn.addEventListener("click", () => {
        const commentText = commentInput.value.trim();
        console.log(commentText);
        if (commentText !== "") {
          console.log(commentText);

          let commentSection = document.createElement("div");
          commentSection.classList.add("comment__other-cont");
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

      //reply user
      const replyCont: HTMLInputElement | null =
        document.querySelector(".comment__reply");

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
              commentSection.classList.add("comment__other-cont");
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
});
