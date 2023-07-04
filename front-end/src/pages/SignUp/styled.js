import { w } from "windstitch";

export const SignUpPageContainer = w.div(
  `
    w-screen 
    h-screen 
    flex 
  `
);

export const TitleContainer = w.div(
  `
    bg-[url("https://img.freepik.com/free-photo/cute-family-playing-summer-field_1157-38883.jpg?w=2000")] 
    bg-no-repeat
    bg-center
    bg-cover
    font-bold 
    font-PassionOne 
    text-black 
    flex 
    flex-col 
    w-[75vw] 
    flex-grow 
    justify-center 
    items-center
  `
);

export const FormContainer = w.div(
  `
    flex 
    flex-col 
    w-[50vw] 
    bg-indigo-400 
    justify-center 
    items-center
  `
);

export const StyledForm = w.form(
  `
    m-auto 
    flex 
    flex-col 
    justify-center 
    items-center 
    gap-[10px]
  `
);

export const StyledInput = w.input(
  `
    w-[30vw] 
    h-[65px] 
    bg-[#FFFFFF] 
    border-[1px] 
    border-white 
    rounded-[6px] 
    text-[#9f9f9f] 
    text-[20px] 
    p-[18px]
  `
);

export const StyledButton = w.button(
  `
    w-[30vw]
    h-[65px]
    bg-yellow-200
    rounded-[6px]
    text-black
    text-[27px]
  `
);

export const StyledP = w.p(
  `
    text-black
    text-[20px]
    cursor-pointer
    underline
  `
);
