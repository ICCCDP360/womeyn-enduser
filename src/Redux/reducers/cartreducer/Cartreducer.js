



import { CART_SUCCESS, CART_DELETE,CART_ALL_DELETE } from '../../types';
const initialState = {
    cartitems: [],

}
const Cart_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_SUCCESS:
            const existingproduct = state.cartitems.find((item) => item.id === action.payload.id);
            if (existingproduct>=0) {
                console.log(existingproduct, "89");
            }
            else {
                const temps={...action.payload,quantiy:1}
                return {
                    ...state,
                    cartitems: [...state.cartitems, temps]

                }
            }

        case CART_DELETE:
            const filter = state.cartitems.filter((item) => item.id !== action.payload);
            return {
                ...state,
                cartitems: filter,
            }
        case CART_ALL_DELETE:{
            return {
                ...state,
                cartitems:action.payload
            }
        }
        default:
            return state;
    }
}


export default Cart_Reducer;