import React from "react";

import { HandleSubmitType } from "../../types";
import { Button, Logo } from "../../components";
import { ScreenWrapper, BoxWrapper, Row } from "../../layouts";
import {
  SignInFormFields,
  SignUpFormFields,
  SignInFormContainer,
  SignUpFormContainer,
} from "../../containers";

enum RenderState {
  SIGNIN = "signin",
  SINGUP = "signup",
}

type RenderStateType = RenderState.SIGNIN | RenderState.SINGUP;

export const AuthScreen = () => {
  const [renderState, setRenderState] = React.useState<RenderStateType>(
    RenderState.SIGNIN
  );

  const handleSubmit: HandleSubmitType<SignInFormFields | SignUpFormFields> = (
    values
  ) => {
    console.log({ values });
  };

  return (
    <ScreenWrapper className="items-center justify-center">
      <BoxWrapper className="flex flex-col w-96 ">
        <Row className="items-center justify-center pt-8">
          <Logo height={32} width={146} />
        </Row>
        <Row className="px-8 pt-4">
          <Button
            role="button"
            onClick={() => {
              console.log(RenderState.SIGNIN);
              setRenderState(RenderState.SIGNIN);
            }}
            className={
              renderState === RenderState.SIGNIN
                ? "bg-green-100 text-emerald-600 px-4 py-2"
                : "text-gray-500 px-4 py-2"
            }
          >
            Sign In
          </Button>
          <Button
            role="button"
            onClick={() => {
              setRenderState(RenderState.SINGUP);
            }}
            className={
              renderState === RenderState.SINGUP
                ? "bg-green-100 text-emerald-600 px-4 py-2"
                : "text-gray-500 px-4 py-2"
            }
          >
            Sign Up
          </Button>
        </Row>

        {renderState === RenderState.SIGNIN ? (
          <SignInFormContainer onSubmit={handleSubmit} />
        ) : (
          <SignUpFormContainer onSubmit={handleSubmit} />
        )}
      </BoxWrapper>
    </ScreenWrapper>
  );
};
