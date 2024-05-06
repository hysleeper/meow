$(function () {
  // Form 제출 버튼
  const submitFormBtn = $("#submit_form_button");

  // Form 제출 버튼 클릭 이벤트
  submitFormBtn.on("click", function () {
    const user_email = $("input[name='user_email']");

    // 이메일 형식 검증 정규표현식
    const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

    // Form 유효성 검사
    if (user_email.val() === "") {
      alert("Please enter your email");
      user_email.focus();
    } else if (regex.test(user_email.val()) === false) {
      alert("Please enter a valid email address");
      user_email.focus();
    } else {
      const data = {
        service_id: "service_pm537js",
        template_id: "template_631aa5p",
        user_id: "ulMVoDko9q8ho5eBO",
        template_params: {
          user_email: user_email.val(),
        },
      };
      $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json",
      })
        .done(function () {
          alert("Your subscription has been successfully submitted!");
          location.reload();
        })
        .fail(function (error) {
          alert("Oops... " + JSON.stringify(error));
        });
    }
  });
});
