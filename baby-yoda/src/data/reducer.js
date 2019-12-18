import initial from './initial';

const saveYoda = (state, action) => ({
    ...state,
    name: action.settings.name,
    color: action.settings.colour,
    submitted: true,
    yoda_id: action.settings.id
});

const feedYoda = (state, action) => ({
    ...state, 
    last_fed: action.feed_data
});

const reducer = (state, action) => {
    switch (action.type){

         case "createYoda": return saveYoda(state, action);
         case "feedYoda": return feedYoda(state, action);
         default: return state;
    }
}

export default reducer;