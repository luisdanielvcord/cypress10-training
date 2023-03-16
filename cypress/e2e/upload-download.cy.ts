import {UploadPage} from "../pages/index";

const uploadPage = new UploadPage();

describe("Uploading files", () => {
  it("Uploading a 1440P picture", () => {
    // Arrange
    const file = "file-to-upload.jpg";
    // Action
    uploadPage.visitURL();
    uploadPage.uploadAndSubmit(file);
    // Assertion
    uploadPage.validateUploadedFile(file);
  });
});
