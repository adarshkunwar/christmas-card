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

// Utility to encode CardState to Base64
export const encodeCardToBase64 = (card: CardState): string => {
  return btoa(JSON.stringify(card));
};

// Utility to decode Base64 to CardState
export const decodeBase64ToCard = (base64String: string): CardState => {
  return JSON.parse(atob(base64String)) as CardState;
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
    // Action to load card data from Base64 string
    loadCardFromBase64: (state, action: PayloadAction<string>) => {
      const decodedCard = decodeBase64ToCard(action.payload);
      state.cardImage = decodedCard.cardImage;
      state.cardName = decodedCard.cardName;
      state.cardDescription = decodedCard.cardDescription;
      state.cardStamp = decodedCard.cardStamp;
    },
  },
});

export const {
  setCardDescription,
  setCardImage,
  setCardName,
  setCardStamp,
  loadCardFromBase64,
} = cardSlice.actions;

export default cardSlice.reducer;
