const EMAIL_TEXT = "EMAIL_TEXT";
const TRAFFIC_TEXT = "TRAFFIC_TEXT";
const SOCIALS_TEXT = "SOCIALS_TEXT";

const MESSENGERS_TEXT = "MESSENGERS_TEXT";

let initialState={
    email: {
        section: "E-mail рассылка",
        link: "",
        type: "",
        num: "",
        // ref: "",
        content:""
    },
    traffic: {
        section: "Онлайн трафик",
        link: "",
        // ref: "",
        // content: "",
        num: ""
    },
    socials: {
        section: "Рассылка в социальных сетях",
        link: "",
        type: "",
        content: "",
        // ref: "",
        num: ""
    },
    messengers: {
        section: "Рассылка в мессенджерах",
        link: "",
        type: "",
        content: "",
        messenger: "",
        num: ""
    }
};

export const functionsReducer = (state=initialState, action) => {
    switch(action.type)
    {
        case EMAIL_TEXT:{
            state.email.link=action.newText.link;
            state.email.type=action.newText.type;
            state.email.num=action.newText.num;
            state.email.content=action.newText.content;

        }break;
        case SOCIALS_TEXT:{
            state.socials.link=action.newText.link;
            state.socials.type=action.newText.type;
            state.socials.content=action.newText.content;
            state.socials.num=action.newText.num;

        }break;
        case MESSENGERS_TEXT:{
            state.messengers.link=action.newText.link;
            state.messengers.type=action.newText.type;
            state.messengers.content=action.newText.content;
            state.messengers.num=action.newText.num;
            state.messengers.messenger=action.newText.messenger;
            
        }break;
        case TRAFFIC_TEXT:{
            state.traffic.link=action.newText.link;
            // state.traffic.ref=action.newText.ref;
            // state.traffic.content=action.newText.content;
            state.traffic.num=action.newText.num;

        }break;

    }
    return state
};
export const emailTextActionCreator = (newText) => ({type: EMAIL_TEXT,newText: newText})
export const trafficTextActionCreator = (newText) => ({type: TRAFFIC_TEXT,newText: newText})
export const socialsTextActionCreator = (newText) => ({type: SOCIALS_TEXT,newText: newText})
export const messengersTextActionCreator = (newText) => ({type: MESSENGERS_TEXT,newText: newText})



