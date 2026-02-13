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
      $this.html("Sending...");

      // =====================================================
      // OPTION 1: FORMSPREE (Recommended - Free, no backend)
      // =====================================================
      // 1. Go to https://formspree.io and create a free account
      // 2. Create a new form and get your form ID (e.g., "xpzgdkny")
      // 3. Replace YOUR_FORM_ID below with your actual Formspree ID
      // 4. Uncomment the Formspree block and comment out the mailto block
      //
      // $.ajax({
      //   url: "https://formspree.io/f/YOUR_FORM_ID",
      //   method: "POST",
      //   data: {
      //     name: name,
      //     _replyto: email,
      //     _subject: "Website Inquiry: " + subject,
      //     message: message,
      //   },
      //   dataType: "json",
      //   success: function () {
      //     $("#success").html("<div class='alert alert-success'>");
      //     $("#success > .alert-success")
      //       .html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>")
      //       .append("<strong>Message sent successfully! </strong>We will get back to you shortly.");
      //     $("#success > .alert-success").append("</div>");
      //     $("#contactForm").trigger("reset");
      //     $this.html("Send Message");
      //     $this.prop("disabled", false);
      //   },
      //   error: function () {
      //     $("#success").html("<div class='alert alert-danger'>");
      //     $("#success > .alert-danger")
      //       .html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>")
      //       .append("<strong>Sorry, it seems our mail server is not responding. Please try again later or email us directly at westackghana@gmail.com</strong>");
      //     $("#success > .alert-danger").append("</div>");
      //     $this.html("Send Message");
      //     $this.prop("disabled", false);
      //   },
      // });

      // =====================================================
      // OPTION 2: MAILTO FALLBACK (Currently Active)
      // =====================================================
      var mailtoLink =
        "mailto:westackghana@gmail.com" +
        "?subject=" +
        encodeURIComponent("Website Inquiry: " + subject) +
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

      // Show success message
      $("#success").html("<div class='alert alert-success'>");
      $("#success > .alert-success")
        .html(
          "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>",
        )
        .append(
          "<strong>Thank you!</strong> Your email client will open. Please click Send in your email app to deliver the message.",
        );
      $("#success > .alert-success").append(
        "<br><small>If your email client doesn't open, email us directly at: <a href='mailto:westackghana@gmail.com'>westackghana@gmail.com</a></small>",
      );
      $("#success > .alert-success").append("</div>");

      // Open email client
      window.location.href = mailtoLink;

      // Reset form
      setTimeout(function () {
        $("#contactForm").trigger("reset");
        $this.html("Send Message");
        $this.prop("disabled", false);
      }, 2000);
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
