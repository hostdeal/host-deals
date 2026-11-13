document.addEventListener("DOMContentLoaded", function () {

  // Prevent placeholder affiliate links from opening
  const affiliateLinks = document.querySelectorAll(
    'a[href^="YOUR_AFFILIATE_LINK"]'
  );

  affiliateLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      alert(
        "Please add your approved affiliate link first."
      );
    });
  });

  // Smooth section navigation
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const target = document.querySelector(
        link.getAttribute("href")
      );

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

});
document.addEventListener("DOMContentLoaded", function () {

  // Affiliate link placeholder protection
  document.querySelectorAll('a[href^="YOUR_"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      alert("Affiliate link has not been added yet.");
    });
  });

  // Smooth navigation
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const href = link.getAttribute("href");

      if (href === "#") return;

      const target = document.querySelector(href);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

});