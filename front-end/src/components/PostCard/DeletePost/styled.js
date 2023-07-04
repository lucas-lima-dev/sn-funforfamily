import { w } from "windstitch";

export const ModalContainer = w.div(
  `
    fixed
    top-0
    left-0
    w-full
    h-full
    bg-[rgba(0,0,0,0.5)]
    flex
    justify-center
    items-center
  `
);

export const ModalContent = w.div(
  `
  bg-green-800
    p-[20px]
    rounded-[7px]
    w-[597px]
    max-w-[80%]
    h-[262px]
    rounded-[10px]
   `
);

export const ModalTitle = w.h2(
  `
    text-[#FFFFFF]
    font-[600]
    text-[40px]
    w-[100%]
    text-center
    mb-[20px]
    leading-[1.5]
  `
);

export const ButtonsContainer = w.div(
  `
    flex
    justify-around
    items-center
    w-[100%]
    mt-[20px]

  `
);

export const CancelButton = w.button(
  `
    bg-[#FFFFFF]
    text-[#1877f2]
    font-[600]
    p-[5px]
    h-[40px]
    rounded-[7px]
    cursor-pointer
  `
);

export const DeleteButton = w.button(
  `
    bg-[#1877f2]
    text-[#FFFFFF]
    font-[600]
    p-[5px]
    h-[40px]
    rounded-[7px]
    cursor-pointer
  `
);
