import { createStore, combineReducers } from "redux";
import {siteReducer} from './Site-reducer'
import {smmReducer} from './Smm-reducer'
import {headerReducer} from './Header-reducer'
import {tableReducer} from './Table-reducer'
import {payReducer} from './Pay-reducer'
import {mainReducer} from './Main-reducer'
import {adminReducer} from './Admin-reducer'
import {preloaderReducer} from './Preloader-reducer'
import { functionsReducer } from "./Functions-reducer";
import { authReducer } from "./Auth-reducer";
import { publicReducer } from "./Public-reducer";
import { infoReducer } from "./Info-reducer";
import { campaignsReducer } from "./Campaigns-reducer";
import { reducer as formReducer} from 'redux-form'



let reducers = combineReducers({
    site: siteReducer,
    functions: functionsReducer,
    smm: smmReducer,
    header: headerReducer,
    table: tableReducer,
    pay: payReducer,
    main: mainReducer,
    admin: adminReducer,
    preloader: preloaderReducer,
    auth: authReducer,
    public: publicReducer,
    info: infoReducer,
    campaigns: campaignsReducer,
    form: formReducer
});
let store = createStore(reducers);



export default store