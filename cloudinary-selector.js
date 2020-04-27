var isDisabled = true;

function updateDisabled(disabled) {
  const elements = $(".myBtn");
  if (disabled) {
    elements.hide();
  } else {
    elements.show();
  }
  isDisabled = disabled;
  updateSize();
}

function renderSelected(images) {
  const $selected = $(".selected").empty();
  const $titleText = $(".title").find(".text");
  const $clear = $(".clearbtn").hide();

  if (images && images.length) {
  } else {
    $titleText.text("No image selected");
    $titleText.removeClass("title--selected");
  }
  updateSize();
}

function setupSelector(value) {
  if (value) {
    currentValue = JSON.parse(value);
    renderSelected(currentValue);
  } else {
    renderSelected();
  }
  // Reacts to window resize to adjust the height
  window.addEventListener("resize", updateSize);
}

function updateSize() {
  // Update the custom element height in the Kentico UI.
  const height = isDisabled
    ? Math.ceil($("html").height())
    : window.screen.height - 300;

  CustomElement.setHeight(height);
}

function initCustomElement() {
  try {
    CustomElement.init((element, _context) => {
      window.ml = cloudinary.createMediaLibrary(
        {
          cloud_name: "dax3wfmka",
          api_key: "183936946851659",
          button_class: "myBtn",
          button_caption: "Select Assets",
        },
        {
          insertHandler: function (data) {
            data.assets.forEach((asset) => {
              console.log("Inserted asset:", JSON.stringify(asset, null, 2));
            });
          },
        },
        document.getElementById("open-btn")
      );

      updateDisabled(element.disabled);
      setupSelector(element.value);
      updateSize();
    });

    // Reacts to changes in disabling (e.g., when publishing the item)
    CustomElement.onDisabledChanged(updateDisabled);
  } catch (err) {
    // Sends message to console and editor if initialization failed (for example, the page is displayed outside the Kontent UI)
    console.error(err);
    setupSelector();
  }
}

initCustomElement();
