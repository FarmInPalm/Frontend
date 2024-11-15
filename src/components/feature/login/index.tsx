import { useNavigate } from "react-router-dom";

import styled from "@emotion/styled";

import { doRegister } from "./apis/fetchRegister.api";
import { Text, FormWrapper, FieldWrapper, Inputfield, SeparationLine, Button } from "./style";

export const RegisterForm = () => {
    const navigate = useNavigate();
    return (
        <FormWrapper>
            <h1>회원 정보 입력</h1>
            <FieldWrapper>
                <Text>아이디</Text>
                <Inputfield type="text" placeholder="로그인시 필요합니다" />
                <SeparationLine />
            </FieldWrapper>
            <FieldWrapper>
                <Text>비밀번호</Text>
                <Inputfield type="password" placeholder="영문, 숫자, 특수문자 포함 8자 이상" />
                <SeparationLine />
            </FieldWrapper>
            <FieldWrapper>
                <Text>닉네임</Text>
                <Inputfield type="text" placeholder="앱에서 쓰일 닉네임" />
                <SeparationLine />
            </FieldWrapper>
            <Button
                onClick={() => {
                    doRegister();
                }}
            >
                회원가입
            </Button>
            <h1>이미 회원이신가요?</h1>
            <Button onClick={() => navigate("/login")}>로그인</Button>
        </FormWrapper>
    );
};

export const LoginForm = () => {
    const navigate = useNavigate();
    return (
        <FormWrapper>
            <h1>회원 정보 입력</h1>
            <FieldWrapper>
                <Text>아이디</Text>
                <Inputfield type="text" />
                <SeparationLine />
            </FieldWrapper>
            <FieldWrapper>
                <Text>비밀번호</Text>
                <Inputfield type="password" />
                <SeparationLine />
            </FieldWrapper>
            <Button>로그인</Button>
            <h1>아직 회원이 아니신가요?</h1>
            <Button onClick={() => navigate("/register")}>회원가입</Button>
        </FormWrapper>
    );
};

export const GoToLoginForm = () => {
    const navigate = useNavigate();
    return (
        <FormWrapper>
            <h1 style={{ fontWeight: "bold" }}>로그인이 필요합니다</h1>
            <Button onClick={() => navigate("/login")}>로그인 하러 가기</Button>
        </FormWrapper>
    );
};
