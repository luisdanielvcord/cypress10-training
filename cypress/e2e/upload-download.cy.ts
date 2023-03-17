import {DownloadPage, UploadPage} from "../pages/index";

const uploadPage = new UploadPage();
const downloadPage = new DownloadPage();

describe("Uploading and downloading files", () => {
  it("Uploading a 1440P picture", () => {
    // Arrange
    const file = "file-to-upload.jpg";
    // Action
    uploadPage.visitURL();
    uploadPage.uploadAndSubmit(file);
    // Assertion
    uploadPage.validateUploadedFile(file);
  });

  it("Downloading a picture", () => {
    // Arrange
    const downloadedFileName = "sampleFile.jpeg";
    // Action
    downloadPage.visitURL();
    downloadPage.downloadPicture();
    // Assertion
    downloadPage.validateDownloadedFile(downloadedFileName);
  });
});
