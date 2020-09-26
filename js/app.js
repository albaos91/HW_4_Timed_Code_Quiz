const QuizGame = () => {
  // Set time
  let totalTime = 5;
  let gameTime = 0;

  // Set scores
  let correct = 0;
  let wrong = 0;
  const total = questions.length;

  const init = () => {
    $(document).ready(function () {
      // console.log(questions);
      $(".html").on("click", loadHTMLCards);
      $(".css").on("click", loadCSSCards);
      $(".js").on("click", loadJsCards);
      // $('.js_intro').on('click', startGame);
      $(".scores_nav").on("click", checkRankingSubmit);
      $(".scores").on("click", checkRankingSubmit);
    });
  };

  const startGame = (e) => {
    $(".quiz_cards").hide();
    $(".scores").show();
    $(".time").show();
    $(".quiz").show();

    // Change bg color
    document.getElementsByTagName("nav")[0].style.borderBottom =
      "1px solid #7DE38D";
    document.getElementsByTagName("body")[0].style.backgroundColor = "#00242B";
    displayQuestion();

    $(".time").text(totalTime);
    stopWatch();
  };

  const loadHTMLCards = () => {
    // HTML Quizzes
    const htmlQuizzes = [
      {
        title: "HTML Tags",
        intro: "HTML elements and structure, the building blocks of websites.",
        id: "html_tags",
      },
      {
        title: "HTML Tables",
        intro: "the syntax you need to create tables in your HTML documents.",
        id: "html_tables",
      },
      {
        title: "HTML Forms",
        intro: "the inner workings of an HTML form!",
        id: "html_forms",
      },
    ];

    $(".catalog").hide();
    $(".languages").hide();
    $(".outro").hide();
    $(".quiz_cards").show();

    htmlQuizzes.forEach((quiz) => {
      $(".quiz_cards .container").append(`<div class="card intro mt-3">
        <div class= "card-header">
          <h6 class="mt-1 mb-0 ml-1">Getting Started with JavaScript</h6>
          <img src="./src/public/assets/images/drawkit-content-man-colour.svg" alt="">
            </div>
          <div class="card-body">
            <h4 class="card-title">${quiz.title}</h4>
            <p class="card-text">Practice ${quiz.intro}</p>
          </div>
          <div class="card-footer">
            <img src="./src/public/assets/images/isolated-layout.svg" alt="">
              <p id="${quiz.id}" class="start">Practice</p>
            </div>`);
      $("#" + quiz.id).on("click", startGame);
    });
  };

  