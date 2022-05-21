import { createContext, useReducer } from "react";
import { format } from 'date-fns';
import addDays from 'date-fns/addDays';

const INITIAL_STATE = {
    destination: undefined,
    destinationId:undefined,
    region:undefined,
    dates:{
        checkin_date: format(addDays(new Date(), 29),'yyyy-MM-dd'),
        checkout_date: format(addDays(new Date(), 30),'yyyy-MM-dd'),
    },
    options: {
        adult: 1,
        children: undefined,
        room: undefined,
    },
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
    switch (action.type) {
        case "NEW_SEARCH":
            return action.payload;
        case "RESET_SEARCH":
            return INITIAL_STATE;
        case "UPDATE_SEARCH":
            return {...state,...action.payload};
        default:
            return state;
    }
};
export const SearchContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

    return (
        <SearchContext.Provider
            value={{
                destination: state.destination,
                destinationId: state.destinationId,
                region: state.region,
                dates: state.dates,
                options: state.options,
                dispatch,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};
