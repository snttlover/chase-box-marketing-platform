
import {siteReducer} from './Site-reducer'
import {smmReducer} from './Smm-reducer'

let store={
    _state: {

        header: {
            balance: 500000
        },

        main:{

        },
        functions:{

        },
        site:{
            targeting: {
                link: "",
                city: "",
                age1: "",
                age2: ""
            },
        },
        
        smm:{

            youtube: {
                target:{
                    test: ""
                },
                context:{
                    test: ""
                }
            },
            instagram: {
                target:{
                    test: ""
                },
                context:{
                    test: ""
                }
            },
            vk: {
                target:{
                    test: ""
                },
                context:{
                    test: ""
                }
            },
            twitter: {
                target:{
                    test: ""
                },
                context:{
                    test: ""
                }
            },
            facebook: {
                target:{
                    test: ""
                },
                context:{
                    test: ""
                }
            },
        }
    },
    getState(){
        return this._state;
    },
    rerenderEntireTree (){

    },
    subscribe (observer){
        this.rerenderEntireTree = observer; //паттерн observer (наблюдатель)
    },

   dispatch(action){
    this._state.site=siteReducer(action, this._state.site);
    this._state.smm=smmReducer(action, this._state.smm);
    this.rerenderEntireTree(this._state);
   }

}




  


export default store;
window.store=store;


// let store = {
    
//     _state: {
//         header: {
//             user:{
//                 name: "Григорий",
//                 ava: '../../img/ava.png'
//             },
//             money:"dfwewe",
//             test: 100000
//         },
//         test:"fr4rr"
//     },
//     getState(){
//         return this._state;
//     },
//     rerenderEntireTree(){

//     },
//     subscribe(observer){
//         this._caller = observer;
//     }

// };

// export default store;
// window.store=store;