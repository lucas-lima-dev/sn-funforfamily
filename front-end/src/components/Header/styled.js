import { w } from "windstitch";
import { Link } from "react-router-dom";

export const HeaderContainer = w.div(
  `
    w-screen
    h-[82px]
    bg-[url("https://33622.cdn.simplo7.net/static/33622/sku/tecidos-tricoline-tecido-tricoline-digital-quebra-cabeca-autismo-ref-9003--p-1636565836823.png")]
    bg-no-repeat
    bg-center
    bg-cover
    flex
    items-center
    justify-around
    fixed
    top-0
    z-1
  `
);
export const SearchBarContainer = w.div(``);

export const StyledInput = w.input(
  `
    bg-[#FFFFFF]
    w-[30vw]
    h-[40px] 
    rounded-[8px] 
    text-[#9f9f9f] 
    text-[20px] 
  `
);
export const StyledUl = w.ul(
  `
    bg-[#FFFFFF] 
    w-[30vw] 
    rounded-[8px] 
    absolute 
    overflow-y-scroll
  `
);
export const StyledLi = w.li(
  `
    flex 
    items-center  
    p-[10px] 
    cursor-pointer 
    h-[100%]
  `
);

export const StyledUserImg = w.img(
  `
    w-[50px] 
    h-[50px] 
    rounded-[100%] 
    mr-[10px]
  `
);
export const HeaderUserInfoContainer = w.div(
  `
    flex
    flex-col
    w-[150px]
    
    
  `
);
export const UserInfoWrapper = w.div(
  `
    flex
    items-center
    justify-evenly
    

  `
);
export const HeaderTitle = w.p(
  `
    w-[108px]
    h-[54px]
    text-white
    font-bold
    font-normal
    ml-[45%]
  `
);

export const LogOutContainer = w.div(
  `
    flex
    items-center 
    justify-center 
    bg-[#FFFFFF] 
    w-[150px] 
    h-[47px] 
    rounded-[8px]
    absolute
    right-[85px]
    top-[70px]
    
  `
);

export const LogOutButton = w.button(
  `
    flex 
    items-center 
    justify-center 
    text-black 
    text-[20px] 
    cursor-pointer
  `
);
