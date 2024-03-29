import { apiSlice } from "../api/apiSlice";
import { get, ref } from "firebase/database";
import { database } from "@/utils/firebaseUtil";


export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDecks: builder.query<any,any>({
      async queryFn(){
        try {
          const docRef = ref(database, "decks");
          const snapshot = await get(docRef);
          return { data: snapshot.val() };
        } catch (error) {
          return { error: (error as Error).message };
        }
      },
      providesTags: ["Deck"],
    }),
  }),
});

export const { useGetDecksQuery } = extendedApiSlice;
