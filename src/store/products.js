const initialState = {
    products: [
      {
        category: 'ELECTRONICS',
        name: 'elcctronic item 1',
        description: 'some description elcctronic item 1',
        price: 200,
        count: 50,
        img: 'https://www.tempepawnandgoldllc.com/wp-content/uploads/2013/11/electronics-tempe-pawn-and-gold.jpg',
      },
      {
        category: 'ELECTRONICS',
        name: 'elcctronic item 2',
        description: 'some description elcctronic item 2',
        price: 400,
        count: 70,
        img: 'https://almalnews.com/wp-content/uploads/2017/01/070f3b55-9788-4df5-ac1a-6562cdf41af9-1600x1000.jpg',
      },
      {
        category: 'FOOD',
        name: 'food item 1',
        description: 'some description about food item 1 ',
        price: 40,
        count: 90,
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg?quality=90&auto=webp',
      },
      {
        category: 'FOOD',
        name: 'food item 2',
        description: 'some description about food item 2',
        price: 20,
        count: 100,
        img: 'https://media-exp1.licdn.com/dms/image/C561BAQHnh3Tsc_uBKQ/company-background_10000/0/1561589281326?e=2159024400&v=beta&t=3cfGYoRfVwt5-vQJL_x4W7MrP_uwZB-PRzqqpfBr5Gg',
      },
      {
        category: 'FOOD',
        name: 'food item 3',
        description: 'some description about food item 3',
        price: 15,
        count: 70,
        img: 'https://purewows3.imgix.net/images/articles/2020_07/healthy_restaurants_nyc_divya.jpg?auto=format,compress&cs=strip',
      },
    ],
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
  
      case 'ADD_ITEM2':
        let newProducts = state.products.map((item) => {
          if (item.name === payload.name) {
            item.count = item.count - 1;
          }
          return item;
        });
  
       
  
        return { products: newProducts, fillterd: state.fillterd };
  
      case 'REMOVE_ITEM2':
        let newProducts2 = state.products.map((item) => {
          if (item.name === payload.name) {
            item.count = item.count + 1;
          }
          return item;
        });
  
     
  
        return { products: newProducts2, fillterd: state.fillterd };
  
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