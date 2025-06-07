import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
      img: "https://cdn.pixabay.com/photo/2016/07/08/20/07/microphone-1505182_1280.jpg",
      name: "Microphone",
      cost: 100,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2021/11/01/13/19/projector-6760348_1280.jpg",
      name: "Projector",
      cost: 200,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/10/04/22/03/speakers-971975_1280.png",
      name: "Speaker System",
      cost: 150,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2014/08/29/14/53/camera-431119_1280.jpg",
      name: "Video Camera",
      cost: 300,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
      name: "Laptop Rental",
      cost: 250,
      quantity: 0,
    },
  ],

  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item) {
        if (item.quantity >= 10) {
          return; // Limit to a maximum of 10 items
        }
        item.quantity++;
      }
    },
    decrementAvQuantity: (state, action) => { 
      const item = state[action.payload];
      if (item && item.quantity > 0) {
        item.quantity--;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
