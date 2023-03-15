import {PersonalFormPage} from "../pages/index";

const personalFormPage = new PersonalFormPage();

describe("Filling out a form", () => {
  it("then the form should be submitted", () => {
    // Arrange
    const personalInformation = {
      name: "Holmes",
      lastName: "Salazar",
      email: "test@email.com",
      gender: "Male",
      dateOfBirth: "27 Jul 2016",
      mobileNumber: "3656589156",
      hobbies: ["Music", "Reading"],
      currentAddress: "Av siempreViva # 123",
      state: "Haryana",
      city: "Panipat",
    };
    const completedFormText = "Thanks for submitting the form";
    // Action
    personalFormPage.visitURL();
    personalFormPage.fillForm(personalInformation);
    // Assertion
    personalFormPage.validateSubmittedForm(completedFormText);
  });
});

