document.addEventListener("DOMContentLoaded", function () {
  async function fetchData() {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }

  async function renderData() {
    const commentCont: HTMLElement | null =
      document.querySelector(".comment__other");

    if (!commentCont) {
      console.error("Unable to find the comment container element.");
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
                  <h1>Максим Авдеенко</h1>
                  <span class="date"></span>
              </div>
              <div class="comment__other-space">
                  <h2>
                     
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
    });
  }

  const commentInput: HTMLInputElement | null = document.querySelector(
    ".comment__input-form"
  );
  const commentBtn: HTMLElement | null = document.querySelector(
    ".comment__input-btn"
  );

  if (commentInput && commentBtn) {
    commentBtn.addEventListener("click", () => {
      const commentText = commentInput.value.trim();
      console.log(commentText);
      if (commentText !== "") {
        console.log(commentText);
        renderData();
        commentInput.value = "";
      }
    });
  }
});
