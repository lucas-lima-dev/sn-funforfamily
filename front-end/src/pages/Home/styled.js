import { w } from "windstitch";

export const HomePageContainer = w.div(
    `
    flex 
    items-center
    justify-center
    w-auto 
    h-screen 
    bg-[#333333]
    overflow-y-scroll

    `
)

export const PostsWrapper = w.div(
    `
    flex
    flex-col
    w-[80vw]
    m-auto
    `
)

export const ContentContainer = w.div(
    `
    flex
    flex-col
    items-center
    mt-[100px]
    `
)

export const PostArea = w.div(
    `
    w-[60%]
    `
)

export const NoPostMessage = w.p(
    `
    flex
    items-center
    justify-center
    text-[#ffffff]
    text-[20px]
    `)