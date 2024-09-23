const fullBanner = {
  createNewFullBannerContent: function () {
    const content = document.createElement("ul");
    content.classList.add("full-banner");

    document.querySelector(".flexslider").after(content);
  },
  createItem: function (element) {
    const itemSlider = document.createElement("li");
    itemSlider.appendChild(element);

    return itemSlider;
  },
  populateSliderWithNewItems: function (sliderItem) {
    const content = document.querySelector(".full-banner");

    sliderItem.removeAttribute("style");
    
    sliderItem.parentElement.tagName === "A"
      ? content.appendChild(this.createItem(sliderItem))
      : content.appendChild(sliderItem);
  },
  findSliderItems: function () {
    const selector = window.matchMedia("(max-width: 768px)").matches
      ? '.flexslider .slides li img[alt*="Mobile"]'
      : '.flexslider .slides li img:not([alt*="Mobile"])';

    document.querySelectorAll(selector).forEach((element) => {
      this.populateSliderWithNewItems(element.parentElement);
    });
  },
  init: function () {
    this.createNewFullBannerContent();
    this.findSliderItems();
    document.querySelector(".flexslider").replaceChildren();
    $(".full-banner").slick({
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: "linear",
    });
  },
};
document.querySelector('.pagina-inicial') ? fullBanner.init() : null;
