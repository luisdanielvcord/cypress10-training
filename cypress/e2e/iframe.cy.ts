import {IFramePage} from "../pages/index";

const iFramePage = new IFramePage();

describe("IFrames", () => {
  it("HTML IFrame", () => {
    // Arrange
    const iFrameTitleHTMLPage = "HTML Tutorial";
    // Action
    iFramePage.visit();
    // Assertion
    iFramePage.getFrameTitle(iFrameTitleHTMLPage);
  });

  it("CSS IFrame", () => {
    // Arrange
    const iFrameTitleCSSPage = "CSS Tutorial";
    // Action
    iFramePage.visit();
    iFramePage.goToCssPageIFrame();
    // Assertion
    iFramePage.getFrameTitle(iFrameTitleCSSPage);
  });
});

