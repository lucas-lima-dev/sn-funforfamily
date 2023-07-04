import { w } from "windstitch";
// import { IoPencil } from "react-icons/io5";

export const StyledNoPostMenssage = w.p(``);

export const PostContentContainer = w.div(
  `
    flex
    rounded-[16px]
    bg-[#171717]
    w-[100%]
    p-[30px]
    box-border
    mb-[20px]
  `
);

export const PostIterractionsWrapper = w.div(
  `
    w-[60px]
    flex
    flex-col
    items-center
    cursor-pointer
  `
);
export const PostUserImg = w.img(
  `
    w-[50px]
    h-[50px]
    rounded-[50%]
    mb-[20px]
  `
);

export const PostTextWrapper = w.div(
  `
    flex
    flex-col
    gap-[10px]
  `
);

export const PostHeader = w.div(
  `
    flex
    flex-col
    justify-start
    items-start
    pt-[2px]
    ml-[17px]
    box-border
  `
);
export const UserNameAndIconContainer = w.div(
  `
    flex
    justify-between
    items-center
    w-[100%]
  `
);
export const PostUserName = w.h1(
  `
    text-[#FFFFFF]
    text-[20px]
    font-light
  `
);

export const PostMessageContainer = w.div(
  `
    flex
    text-[17px]
    text-[#B7B7B7]
    leading-[20px]
    mt-[8px]
    break-all
  `
);

export const PostUrlMetadataContainer = w.div(
  `
    flex
    ml-[10px]
    space-between
    w-[100%]
    border-[1px]
    rounded-[11px]
    border-[#4D4D4D]
    border-solid
    no-underline
  `
);
export const PostUrlMetadataTextContainer = w.div(
  `
    w-[400px]
  `
);
export const PostUrlMetadataH1 = w.h1(
  `
    text-[16px]
    text-[#CECECE]
    leading-[19px]
    mt-[24px]
    ml-[10px]
    mb-[5px]
  `
);

export const PostUrlMetadataH2 = w.h2(
  `
    text-[11px]
    text-[#9B9595]
    leading-[13px]
    ml-[10px]
    mb-[13px]
  `
);

export const PostUrlMetadataH3 = w.h3(
  `
    text-[11px]
    text-[#CECECE]
    leading-[13px]
    ml-[10px]
  `
);

export const PostUrlMetadataImg = w.img(
  `
    w-[155px]
    h-[155px]
    rounded-[11px]
  `
);

export const UpdateAndDeletePostContainer = w.div(
  `
    flex
    gap-[10px]
  `
);
