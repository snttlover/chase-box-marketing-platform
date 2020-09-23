
const TARGETING_TEXT = "TARGETING_TEXT";
const SEO_TEXT = "SEO_TEXT";
const CONTEXT_TEXT = "CONTEXT_TEXT";
let CHANGE_SOC="CHANGE_SOC"


let initialState={

    targeting: {
        section: "Таргетинг",
        link: "",
        city: "",
        soc: "",
        good: "",
        disk: "",

        time: "",
        budjet: ""
    },
    seo: {
        section: "SEO",
        link: "",
        number: "",
        time: "",

        content: "",
        budjet: ""
    },
    context: {
        section: "Контекстная реклама",
        link: "",
        good: "",
        city: "",
        content: "",
        time: "",

        disk: "",
        budjet: ""
    }
};


export const siteReducer = (state=initialState, action) => {
    
    switch(action.type)
    {
        case TARGETING_TEXT:{
            
            state.targeting.link=action.newText.link;
            state.targeting.city=action.newText.city;
            state.targeting.good=action.newText.good;
            state.targeting.soc=action.newText.soc;
            state.targeting.time=action.newText.time;
            state.targeting.budjet=action.newText.budjet;
            state.targeting.disk=action.newText.disk;


            
            
        }break;
        case SEO_TEXT:{
            
            state.seo.link=action.newText.link;
            state.seo.number=action.newText.number;
            state.seo.content=action.newText.content;
            state.seo.time=action.newText.time;
            state.seo.budjet=action.newText.budjet;

            
        }break;
        case CONTEXT_TEXT:{
            
            state.context.link=action.newText.link;
            state.context.good=action.newText.good;
            state.context.content=action.newText.content;
            state.context.city=action.newText.city;
            state.context.disk=action.newText.disk;
            state.context.time=action.newText.time;
            state.context.budjet=action.newText.budjet;



            
        }break;
        case CHANGE_SOC:{
            
            state.targeting.typeSoc=action.newType;
            
        }break;

    }



    return state

};

export const targetingTextActionCreator = (newText) => ({type: TARGETING_TEXT,newText: newText})
export const seoTextActionCreator = (newText) => ({type: SEO_TEXT,newText: newText})
export const contextTextActionCreator = (newText) => ({type: CONTEXT_TEXT,newText: newText})
export const changeSocActionCreator = (newType) => ({type: CHANGE_SOC, newType: newType})


