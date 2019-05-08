import moment from 'moment';
const filterReducerDefaultState=
    {
        searchText: '',
        sortBy:'date', 
        from: moment().startOf('month'),
        to: moment().endOf('month')
    }

export default(state = filterReducerDefaultState, action)=>{
    switch(action.type){

        case 'SET_TEXT_FILTER':
            return {
                ...state,
                searchText:action.searchText
            };
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy: 'amount'
            };
        
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy:'date'
            }
        case 'SET_START_DATE':
            return{
                ...state,
                from: action.startDate
            };
        case 'SET_END_DATE':
            return{
                ...state,
                to: action.endDate
            };


        default: 
            return state;
    }
}
