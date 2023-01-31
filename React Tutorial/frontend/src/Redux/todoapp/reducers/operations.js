import { ADD_TODO, CHECK_TODO, REMOVE_TODO, UPDATE_TODO } from "../actions";

const initialState = [];

export const operationsReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      const filterData = state.filter((todo) => todo.id !== action.payload);
      return filterData;
    case UPDATE_TODO:
      let data = action.payload;
      const updatedArray = [];
      state.map((item) => {
        if (item.id === data.id) {
          item.id = data.id;
          item.todo = data.todo;
          item.completed = data.completed;
        }
        updatedArray.push(item);
      });
      return updatedArray;
    // case CHECK_TODO:
    //   let checkData = action.payload;
    //   state.map((item) => {
    //     if(item.id === checkData.id){

    //     }
    //   })
    default:
      return state;
  }
};
