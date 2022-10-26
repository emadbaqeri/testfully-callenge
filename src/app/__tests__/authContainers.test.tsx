import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AuthScreen } from "../screens";
import { SignInFormContainer, SignUpFormContainer } from "../containers";

test("rendering sign in form inputs correctly", () => {
  const { getByLabelText } = render(<SignInFormContainer />);
  const emailInput = getByLabelText("Email");
  const passwordInput = getByLabelText("Password");
  expect(emailInput).toHaveAttribute("type", "email");
  expect(passwordInput).toHaveAttribute("type", "password");
});

test("rendering sign up form inputs currectly", () => {
  const { getByLabelText } = render(<SignUpFormContainer />);
  const fullnameInput = getByLabelText("Full name");
  const emailInput = getByLabelText("Email");
  const passwordInput = getByLabelText("Password");
  const repeatPasswordInput = getByLabelText("Repeat Password");

  expect(fullnameInput).toHaveAttribute("type", "text");
  expect(emailInput).toHaveAttribute("type", "email");
  expect(passwordInput).toHaveAttribute("type", "password");
  expect(repeatPasswordInput).toHaveAttribute("type", "password");
});

test('rendering "Sign Up" & Sign In" renderer buttons currectly', () => {
  const { getByRole, getAllByRole } = render(<AuthScreen />);
  const signInBtn = getAllByRole("button", { name: "Sign In" });
  const signUpBtn = getByRole("button", { name: "Sign Up" });

  signInBtn.forEach((btn) => {
    expect(btn).toHaveTextContent("Sign In");
  });

  expect(signUpBtn.textContent).toBe("Sign Up");
});

test("Sign In form inputs has value", () => {
  const { getByLabelText } = render(<SignInFormContainer />);
  const emailInput = getByLabelText("Email");
  const passwordInput = getByLabelText("Password");

  userEvent.type(emailInput, "ebaqeri@protonmail.com");
  userEvent.type(passwordInput, "Emad1234");

  expect(emailInput.value).toBe("ebaqeri@protonmail.com");
  expect(passwordInput.value).toBe("Emad1234");
});

test("Sign Up form inputs has value", () => {
  const { getByLabelText } = render(<SignUpFormContainer />);
  const fullnameInput = getByLabelText("Full name");
  const emailInput = getByLabelText("Email");
  const passwordInput = getByLabelText("Password");
  const repeatPasswordInput = getByLabelText("Repeat Password");

  userEvent.type(fullnameInput, "Emad Baqeri");
  userEvent.type(emailInput, "ebaqeri@protonmail.com");
  userEvent.type(passwordInput, "Emad1234");
  userEvent.type(repeatPasswordInput, "Emad1234");

  expect(fullnameInput.value).toBe("Emad Baqeri");
  expect(emailInput.value).toBe("ebaqeri@protonmail.com");
  expect(passwordInput.value).toBe("Emad1234");
  expect(repeatPasswordInput.value).toBe("Emad1234");
});

test("Sign In input shows errors", async () => {});
