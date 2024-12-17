import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CardState {
  cardImage: string;
  cardName: string;
  cardDescription: string;
  cardStamp: string;
}

const initialState: CardState = {
  cardImage: "",
  cardName: "",
  cardDescription: "",
  cardStamp: "",
};

export const cardSlice = createSlice({
  initialState,
  name: "card",
  reducers: {
    setCardImage: (state, action: PayloadAction<string>) => {
      state.cardImage = action.payload;
    },
    setCardName: (state, action: PayloadAction<string>) => {
      state.cardName = action.payload;
    },
    setCardDescription: (state, action: PayloadAction<string>) => {
      state.cardDescription = action.payload;
    },
    setCardStamp: (state, action: PayloadAction<string>) => {
      state.cardStamp = action.payload;
    },
  },
});

export const { setCardDescription, setCardImage, setCardName, setCardStamp } =
  cardSlice.actions;

export default cardSlice.reducer;
