$(function () {
  // Form 제출 버튼
  const submitFormBtn = $("#submit_form_button");

  // Form 제출 버튼 클릭 이벤트
  submitFormBtn.on("click", function () {
    const user_name = $("input[name='user_name']");
    const user_nationality = $("select[name='user_nationality'] option:selected");
    const user_email = $("input[name='user_email']");
    const user_motivation = $("textarea[name='user_motivation']");
    const user_instagram = $("input[name='user_instagram']");
    const user_facebook = $("input[name='user_facebook']");
    const user_tiktok = $("input[name='user_tiktok']");
    const user_youtube = $("input[name='user_youtube']");
    const user_twitter = $("input[name='user_twitter']");
    const user_total_followers = $("input[name='user_total_followers']");

    // 이메일 형식 검증 정규표현식
    const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

    // Form 유효성 검사
    if (user_name.val() === "") {
      alert("Please enter your name");
      user_name.focus();
    } else if (user_nationality.text() === "Select") {
      alert("Please select your nationality");
      user_nationality.focus();
    } else if (user_email.val() === "") {
      alert("Please enter your email");
      user_email.focus();
    } else if (regex.test(user_email.val()) === false) {
      alert("Please enter a valid email address");
      user_email.focus();
    } else if (user_motivation.val() === "") {
      alert("Please enter your motivation");
      user_motivation.focus();
    } else if (
      user_instagram.val() === "" &&
      user_facebook.val() === "" &&
      user_tiktok.val() === "" &&
      user_youtube.val() === "" &&
      user_twitter.val() === ""
    ) {
      alert("Please enter at least one of your social media account");
    } else if (user_total_followers.val() === "") {
      alert("Please enter your total followers");
      user_total_followers.focus();
    } else {
      let sns_url_text = "";
      if (user_instagram.val() !== "") {
        sns_url_text += "Instagram: " + user_instagram.val() + "\n";
      }
      if (user_facebook.val() !== "") {
        sns_url_text += "Facebook: " + user_facebook.val() + "\n";
      }
      if (user_tiktok.val() !== "") {
        sns_url_text += "Tiktok: " + user_tiktok.val() + "\n";
      }
      if (user_youtube.val() !== "") {
        sns_url_text += "Youtube: " + user_youtube.val() + "\n";
      }
      if (user_twitter.val() !== "") {
        sns_url_text += "Twitter: " + user_twitter.val() + "\n";
      }
      sns_url_text += "Total Followers: " + user_total_followers.val().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

      const data = {
        service_id: "service_pm537js",
        template_id: "template_2nippkh",
        user_id: "ulMVoDko9q8ho5eBO",
        template_params: {
          user_name: user_name.val(),
          user_nationality: user_nationality.text(),
          user_email: user_email.val(),
          user_motivation: user_motivation.val(),
          sns_url_text: sns_url_text,
        },
      };
      $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json",
      })
        .done(function () {
          alert("Form submitted successfully!");
          location.reload();
        })
        .fail(function (error) {
          alert("Oops... " + JSON.stringify(error));
        });
    }
  });
});
