const YOUTUBE_TARGET_TEXT = "YOUTUBE_TARGET_TEXT";
const INSTAGRAM_TARGET_TEXT = "INSTAGRAM_TARGET_TEXT";
const VK_TARGET_TEXT = "VK_TARGET_TXEXT";
const TWITTER_TARGET_TEXT = "TWITTER_TARGET_TEXT";
const FACEBOOK_TARGET_TEXT = "FACEBOOK_TARGET_TEXT ";
const YOUTUBE_CONTEXT_TEXT = "YOUTUBE_CONTEXT_TEXT";
const INSTAGRAM_STORIES_TEXT = "INSTAGRAM_STORIES_TEXT";
const VK_CONTEXT_TEXT = "VK_CONTEXT_TEXT";
const TWITTER_CONTEXT_TEXT = "TWITTER_CONTEXT_TEXT";
const FACEBOOK_CONTEXT_TEXT = "FACEBOOK_CONTEXT_TEXT ";
const TELEGRAM_TEXT = "TELEGRAM_TEXT ";
const ODNOKLASSNIKI_TARGET_TEXT = "ODNOKLASSNIKI_TARGET_TEXT";
const ODNOKLASSNIKI_BANNER_TEXT = "ODNOKLASSNIKI_BANNER_TEXT";

const HIDE = "HIDE";
// const YOUTUBE_HIDE = "YOUTUBE_HIDE";
// const INSTAGRAM_HIDE = "INSTAGRAM_HIDE";
// const VK_HIDE = "VK_HIDE";
// const TWITTER_HIDE = "TWITTER_HIDE";
// const FACEBOOK_HIDE = "FACEBOOK_HIDE";

let initialState = {
    youtubeHide: false,
    instagramHide: true,
    vkHide: true,
    twitterHide: true,
    facebookHide: true,
    youtube: {
        target: {
            section: "YouTube/Таргетинг",
            link: "",
            city: "",
            good: ""
        },
        context: {
            section: "YouTube/Контекстная реклама",
            link: "",
            good: "",
            city: "",
            time: "",

            content: ""
        }
    },
    telegram: {
        section: "Telegram",
        link: "",
        good: "",

        post: ""
    },
    instagram: {
        target: {
            section: "Instagram/Таргетинг",
            link: "",
            city: "",
            good: "",
            time: "",

            post: "",
            budjet: ""
        },
        context: {
            section: "Instagram/Сторис",
            link: "",
            good: "",
            city: "",
            content: "",
            time: "",

            disk: "",
            budjet: ""
        }
    },
    vk: {
        target: {
            section: "VK/Таргетинг",
            link: "",
            city: "",
            good: "",
            time: "",

            post: "",
            budjet: ""

        },
        context: {
            section: "VK/Баннерная реклама",
            link: "",
            good: "",
            city: "",
            time: "",

            content: "",
            disk: "",
            budjet: ""

        }
    },
    odnoklassniki: {
        target: {
            section: "Одноклассники/Таргетинг",
            link: "",
            city: "",
            time: "",

            good: "",
            post: "",
            budjet: ""

        },
        banner: {
            section: "Одноклассники/Баннерная реклама",
            link: "",
            good: "",
            city: "",
            time: "",

            content: "",
            disk: "",
            budjet: ""

        }
    },
    twitter: {
        target: {
            section: "Twitter/Таргетинг",
            link: "",
            city: "",
            time: "",

            good: ""
        },
        context: {
            section: "Twitter/Контекстная реклама",
            link: "",
            good: "",
            city: "",
            time: "",

            content: ""
        }
    },
    facebook: {
        target: {
            section: "Facebook",
            link: "",
            city: "",
            good: "",
            time: "",

            disk: "",
            budjet: ""
        },
        context: {
            section: "Facebook/Контекстная реклама",
            link: "",
            good: "",
            city: "",
            time: "",

            content: ""
        }
    }
};

export const smmReducer = (state = initialState, action) => {

    switch (action.type) {
        case YOUTUBE_TARGET_TEXT: {
            state.youtube.target.link = action.newText.link;
            state.youtube.target.city = action.newText.city;
            state.youtube.target.good = action.newText.good;
        } break;
        case INSTAGRAM_TARGET_TEXT: {
            state.instagram.target.link = action.newText.link;
            state.instagram.target.city = action.newText.city;
            state.instagram.target.good = action.newText.good;
            state.instagram.target.post = action.newText.post;
            state.instagram.target.time = action.newText.time;
            state.instagram.target.budjet = action.newText.budjet;



        } break;
        case TELEGRAM_TEXT: {
            state.telegram.link = action.newText.link;
            state.telegram.city = action.newText.city;
            state.telegram.good = action.newText.good;
            state.telegram.post = action.newText.post;

        } break;
        case VK_TARGET_TEXT: {
            state.vk.target.link = action.newText.link;
            state.vk.target.city = action.newText.city;
            state.vk.target.good = action.newText.good;
            state.vk.target.post = action.newText.post;
            state.vk.target.time = action.newText.time;
            state.vk.target.budjet = action.newText.budjet;

            
        } break;
        case ODNOKLASSNIKI_TARGET_TEXT: {
            state.odnoklassniki.target.link = action.newText.link;
            state.odnoklassniki.target.city = action.newText.city;
            state.odnoklassniki.target.good = action.newText.good;
            state.odnoklassniki.target.post = action.newText.post;
            state.odnoklassniki.target.time = action.newText.time;
            state.odnoklassniki.target.budjet = action.newText.budjet;

            
        } break;
        case TWITTER_TARGET_TEXT: {
            state.twitter.target.link = action.newText.link;
            state.twitter.target.city = action.newText.city;
            state.twitter.target.good = action.newText.good;
            
        } break;
        case FACEBOOK_TARGET_TEXT: {
            state.facebook.target.link = action.newText.link;
            state.facebook.target.city = action.newText.city;
            state.facebook.target.good = action.newText.good;
            state.facebook.target.disk = action.newText.disk;
            state.facebook.target.time = action.newText.time;
            state.facebook.target.budjet = action.newText.budjet;



        } break;
        case YOUTUBE_CONTEXT_TEXT: {
            state.youtube.context.link = action.newText.link;
            state.youtube.context.city = action.newText.city;
            state.youtube.context.good = action.newText.good;
            state.youtube.context.content = action.newText.content;

        } break;
        case INSTAGRAM_STORIES_TEXT: {
            state.instagram.context.link = action.newText.link;
            state.instagram.context.city = action.newText.city;
            state.instagram.context.good = action.newText.good;
            state.instagram.context.content = action.newText.content;
            state.instagram.context.disk = action.newText.disk;
            state.instagram.context.time = action.newText.time;
            state.instagram.context.budjet = action.newText.budjet;
            

        } break;
        case VK_CONTEXT_TEXT: {
            state.vk.context.link = action.newText.link;
            state.vk.context.city = action.newText.city;
            state.vk.context.good = action.newText.good;
            state.vk.context.content = action.newText.content;
            state.vk.context.disk = action.newText.disk;
            state.vk.context.time = action.newText.time;
            state.vk.context.budjet = action.newText.budjet;



        } break;
        case ODNOKLASSNIKI_BANNER_TEXT: {
            state.odnoklassniki.banner.link = action.newText.link;
            state.odnoklassniki.banner.city = action.newText.city;
            state.odnoklassniki.banner.good = action.newText.good;
            state.odnoklassniki.banner.content = action.newText.content;
            state.odnoklassniki.banner.disk = action.newText.disk;
            state.odnoklassniki.banner.time = action.newText.time;
            state.odnoklassniki.banner.budjet = action.newText.budjet;



        } break;
        case TWITTER_CONTEXT_TEXT: {
            state.twitter.context.link = action.newText.link;
            state.twitter.context.city = action.newText.city;
            state.twitter.context.good = action.newText.good;
            state.twitter.context.content = action.newText.content;

        } break;
        case FACEBOOK_CONTEXT_TEXT: {
            state.facebook.context.link = action.newText.link;
            state.facebook.context.city = action.newText.city;
            state.facebook.context.good = action.newText.good;
            state.facebook.context.content = action.newText.content;
            state.facebook.context.time = action.newText.time;


        } break;
        case HIDE: {
            state.youtubeHide = action.flags.youtube;
            state.instagramHide = action.flags.instagram;
            state.vkHide = action.flags.vk;
            state.twitterHide = action.flags.twitter;
            state.facebookHide = action.flags.facebook;

        } break;
        // case YOUTUBE_HIDE:{
        //     state.youtubeHide = !state.youtubeHide;
        // }break;
        // case INSTAGRAM_HIDE:{
        //     state.instagramHide = !state.instagramHide;
        // }break;
        // case VK_HIDE:{
        //     state.vkHide = !state.vkHide;
        // }break;
        // case TWITTER_HIDE:{
        //     state.twitterHide = !state.twitterHide;
        // }break;
        // case FACEBOOK_HIDE:{
        //     state.facebookHide = !state.facebookHide;
        // }break;
    }


    return state
};


export const youtubeTargetingTextActionCreator = (newText) => ({ type: YOUTUBE_TARGET_TEXT, newText: newText })
export const instagramTargetingTextActionCreator = (newText) => ({ type: INSTAGRAM_TARGET_TEXT, newText: newText })
export const telegramTextActionCreator = (newText) => ({ type: TELEGRAM_TEXT, newText: newText })

export const vkTargetingTextActionCreator = (newText) => ({ type: VK_TARGET_TEXT, newText: newText })
export const odnoklassnikiTargetingTextActionCreator = (newText) => ({ type: ODNOKLASSNIKI_TARGET_TEXT, newText: newText })
export const odnoklassnikiBannerTextActionCreator = (newText) => ({ type: ODNOKLASSNIKI_BANNER_TEXT, newText: newText })

export const facebookTargetingTextActionCreator = (newText) => ({ type: FACEBOOK_TARGET_TEXT, newText: newText })
export const twitterTargetingTextActionCreator = (newText) => ({ type: TWITTER_TARGET_TEXT, newText: newText })
export const youtubeContextTextActionCreator = (newText) => ({ type: YOUTUBE_CONTEXT_TEXT, newText: newText })
export const instagramStoriesTextActionCreator = (newText) => ({ type: INSTAGRAM_STORIES_TEXT, newText: newText })
export const vkContextTextActionCreator = (newText) => ({ type: VK_CONTEXT_TEXT, newText: newText })
export const facebookContextTextActionCreator = (newText) => ({ type: FACEBOOK_CONTEXT_TEXT, newText: newText })
export const twitterContextTextActionCreator = (newText) => ({ type: TWITTER_CONTEXT_TEXT, newText: newText })
export const hideActionCreator = (flags) => ({ type: HIDE, flags: flags })
// export const youtubeHideTextActionCreator = () => ({type: YOUTUBE_HIDE})
// export const instagramHideTextActionCreator = () => ({type: INSTAGRAM_HIDE})
// export const vkHideTextActionCreator = () => ({type: VK_HIDE})
// export const twitterHideTextActionCreator = () => ({type: TWITTER_HIDE})
// export const facebookHideTextActionCreator = () => ({type: FACEBOOK_HIDE})

