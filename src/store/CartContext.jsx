import { createContext ,useReducer} from "react";

const CartContext = createContext ({
    items:[],
    addItems: (id)=>{},
    removeItems: (id)=>{},

});

function cartReducer(state,action) {
    if (action.type === 'ADD_ITEM') {
        const exitingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const updatedItems = [...state.items];

        if (exitingCartItemIndex > -1) {
            const exitingItem  = state.items[exitingCartItemIndex];
            const updateItem = {
                ...exitingItem,
                quantity: exitingItem.quantity + 1,

            };
            updatedItems[exitingCartItemIndex] = updateItem;
        
        }
         else {
            updatedItems.push({...action.item,quantity:1});
         }
         return {...state,items:updatedItems}; 
    }
    if (action.type === 'REMOVE_ITEM') {
        const exitingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );

        const exitingCartItem= state.items[exitingCartItemIndex];

        if (exitingCartItem.quantity === 1) {
            const updatedItems = [...state.ites];
            updatedItems.splice(exitingCartItemIndex,1);
        } else {
            const updatedItem = {
                ...exitingCartItem,
                quantity: exitingCartItem.quantity - 1,
            };
            updatedItems[exitingCartItemIndex] = updatedItem;
        }
        return {...state,items:updatedItems};
        
            
        
    }
    return state;
}

export function CartContextProvider({children}) {
    const [cart,dispatchCartAction] = useReducer( cartReducer,{items:[]} );

  

    function addItem(item) {
        dispatchCartAction({type:'ADD_ITEM',item});

    }
    function removeItem(id){
         dispatchCartAction({type:'REMOVE_ITEM',id});
    }

      const cartContext  = {
        items:cart.items,
        addItem,
        removeItem,

    };
    console.log(cartContext);


    return( <CartContext value={cartContext}>{children}</CartContext>)
}

export default CartContext;
