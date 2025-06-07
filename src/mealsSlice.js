// mealsSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: [
    {
      img: 'https://cdn.pixabay.com/photo/2016/11/29/11/15/fruits-1869132_1280.jpg',
      name: 'Breakfast Buffet',
      cost: 15,
      selected: false,
    },
    {
      img: 'https://cdn.pixabay.com/photo/2023/05/29/17/01/hamburger-8026582_1280.jpg',
      name: 'Lunch Package',
      cost: 25,
      selected: false,
    },
    {
      img: 'https://cdn.pixabay.com/photo/2016/11/23/18/31/pasta-1854245_1280.jpg',
      name: 'Dinner Set Menu',
      cost: 30,
      selected: false,
    },
    {
      img: 'https://cdn.pixabay.com/photo/2021/01/31/06/32/coffee-5965977_1280.jpg',
      name: 'Coffee Break Snacks',
      cost: 10,
      selected: false,
    },
    {
      img: 'https://cdn.pixabay.com/photo/2022/02/12/21/22/toast-7009956_1280.jpg',
      name: 'Vegetarian Meal Option',
      cost: 20,
      selected: false,
    },
  ],
  reducers: {
    toggleMealSelection: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        state[index].selected = !state[index].selected;
        // If selected, increment quantity, otherwise set to 0
        state[index].quantity = state[index].selected ? 1 : 0;
      }
    },
  },
});

export const { toggleMealSelection } = mealsSlice.actions;

export default mealsSlice.reducer;
