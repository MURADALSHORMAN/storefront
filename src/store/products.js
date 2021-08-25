const initialState = {

  products: [],
  fillterd: [],
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

 
  switch (type) {
    case 'SELECT_ACTIVE2':
      let products = state.products.filter((item) =>
        item.category === payload ? item : null
      );
      
      return { products: state.products, fillterd: products };

    case 'GET_ALL_DATA':
      return { products: payload.results, fillterd: state.fillterd };

    case 'ADD_ITEM2':
      return { products: state.products, fillterd: state.fillterd };

    case 'REMOVE_ITEM2':
      return { products: state.products, fillterd: state.fillterd };

    default:
      return state;
  }
};

export const selectActiveItems = (name) => {
  
  return {
    type: 'SELECT_ACTIVE2',
    payload: name,
  };
};

export const reduceCount = (item) => {
  return {
    type: 'ADD_ITEM2',
    payload: item,
  };
};

export const increseCount = (item) => {
  return {
    type: 'REMOVE_ITEM2',
    payload: item,
  };
};

export default productsReducer;