$(function () {
  $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) {},
    submitSuccess: function ($form, event) {
      event.preventDefault();
      var name = $("input#name").val();
      var email = $("input#email").val();
      var subject = $("input#subject").val();
      var message = $("textarea#message").val();

      $this = $("#sendMessageButton");
      $this.prop("disabled", true);

      // Create mailto link to company
      var mailtoLinkToCompany =
        "mailto:westackghana@gmail.com" +
        "?subject=" +
        encodeURIComponent("Contact Form: " + subject) +
        "&body=" +
        encodeURIComponent(
          "Name: " +
            name +
            "\n" +
            "Email: " +
            email +
            "\n\n" +
            "Message:\n" +
            message,
        );

      // Create mailto link for auto-reply to sender
      var mailtoLinkToSender =
        "mailto:" +
        email +
        "?subject=" +
        encodeURIComponent(
          "Thank you for contacting Westack Engineering Ltd.",
        ) +
        "&body=" +
        encodeURIComponent(
          "Dear " +
            name +
            ",\n\n" +
            "Thank you for reaching out to us. We have received your message regarding: " +
            subject +
            "\n\n" +
            "Our team will review your inquiry and get back to you as soon as possible.\n\n" +
            "Best regards,\n" +
            "Westack Engineering Ltd.\n" +
            "Email: westackghana@gmail.com\n" +
            "Phone: +233 208 907 208",
        );

      // Show success message
      $("#success").html("<div class='alert alert-success'>");
      $("#success > .alert-success")
        .html(
          "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;",
        )
        .append("</button>");
      $("#success > .alert-success").append(
        "<strong>Thank you for your message!</strong>",
      );
      $("#success > .alert-success").append(
        "<p>Your email client will open to send your message to us. Please send both emails (to us and the confirmation to yourself).</p>",
      );
      $("#success > .alert-success").append(
        "<p>If your email client doesn't open automatically, please email us at: westackghana@gmail.com</p>",
      );
      $("#success > .alert-success").append("</div>");

      // Open email client for message to company
      window.location.href = mailtoLinkToCompany;

      // After a short delay, open email client for auto-reply to sender
      setTimeout(function () {
        window.open(mailtoLinkToSender, "_blank");
      }, 1000);

      // Reset form after a short delay
      setTimeout(function () {
        $("#contactForm").trigger("reset");
        $this.prop("disabled", false);
      }, 3000);
    },
    filter: function () {
      return $(this).is(":visible");
    },
  });

  $('a[data-toggle="tab"]').click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

$("#name").focus(function () {
  $("#success").html("");
});
