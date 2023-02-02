import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, CHECK_TODO } from "../actions";

const initialState = [];

export const operationsReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      const filterData = state.filter((todo) => todo.id !== action.payload);
      return filterData;
    // case FIND_TODO:
    //   const findData = state.find((todo) => todo.id == action.payload);
    case UPDATE_TODO:
      let data = action.payload;
      console.log(data, "data")
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
    case CHECK_TODO:
      let datas = action.payload;
      console.log(datas, "datas")
      const updatedArrays = [];
      state.map((item)=> {
        if(item.id === datas.id){
          console.log(item, 'ulklkf')
          item.completed = true
        }else{
          item.completed = false
        }
        updatedArrays.push(item)
      })  
      return updatedArrays
      default:
      return state;
  }
};
