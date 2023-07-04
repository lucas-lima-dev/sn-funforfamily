import { w } from "windstitch";

export const CreateNewPostContainer = w.div(
  `
    flex
    justify-between
    h-[209px]
    mb-[30px]
    bg-white
    shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]
    rounded-[16px]
    `
);

export const UserImgBox = w.div(
  `
    p-[20px]
    box-border
    
        `
);

export const StyledUserImg = w.img(
    `
    rounded-[50%]
    w-[65px]
    h-[65px]
    `
)

export const PostBox = w.div(
    `
    p-[15px]
    box-border
    w-[90%]
    `
)

export const StyledPostTitle = w.h1(
    `
    mb-[10px]
    text-[#707070]
    text-[20px]
    font-light
    leading-[25px]

`)

export const StyledForm = w.form(
    `
    flex
    flex-wrap
    justify-end
    gap-[10px]
    `
)

export const StyledURLInput = w.input(
    `
    w-[100%]
    bg-[#EFEFEF]
    rounded-[6px]
    h-[30px]
    
    `
)

export const StyledDescriptionInput = w.textarea(
    `
    w-[100%]
    bg-[#EFEFEF]
    rounded-[6px]
    h-[66px]

    `
)

export const StyledButton = w.button(
    `
    w-[30%]
    bg-[#1877F2]
    rounded-[6px]
    h-[30px]
    text-[#FFFFFF]
    w-[50%]
    
`)