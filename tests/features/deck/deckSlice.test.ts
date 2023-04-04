import { configureStore } from "@reduxjs/toolkit";
import {extendedApiSlice, useGetDecksQuery} from "@/features/deck/deckSlice";
import { database } from "@/utils/firebaseUtil";
import { Database, DatabaseReference } from "firebase/database";

const refMock = vi.fn();
const getMock = vi.fn();

vi.mock('firebase/database', async () => {
    const actual = await vi.importActual<typeof import('firebase/database')>('firebase/database');
    return {
        ...actual,
        get: (ref: DatabaseReference) => getMock(ref),
        ref: (db: Database, path?: string) => refMock(db, path),
    };
});
describe("extendedApiSlice", () => {
    let store : any;

    beforeEach(() => {
        store = configureStore({
            reducer: {
                [extendedApiSlice.reducerPath]: extendedApiSlice.reducer,
            },
            middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware().concat(extendedApiSlice.middleware),
        });

        afterEach(() => {
            vi.clearAllMocks();
        });
    });

    it("should fetch decks successfully", async () => {
        const mockDecks = {
            deck1: {
                id: "deck1",
                title: "Sample Deck 1",
            },
            deck2: {
                id: "deck2",
                title: "Sample Deck 2",
            },
        };

        refMock.mockReturnValue('decks');
        getMock.mockResolvedValue({ val: () => mockDecks });

        await store.dispatch(extendedApiSlice.endpoints.getDecks.initiate({}));

        expect(refMock).toHaveBeenCalledWith(database, 'decks');
        expect(getMock).toHaveBeenCalledWith('decks');
        expect(store.getState().api.queries).toMatchObject({
            'getDecks({})': {
                status: 'fulfilled',
                data: mockDecks,
            },
        });
    })

    it('should return an error when fetching decks fails', async () => {
        const mockError = new Error('Fetching decks failed');

        refMock.mockReturnValue('decks');
        getMock.mockRejectedValue(mockError);

        await store.dispatch(extendedApiSlice.endpoints.getDecks.initiate({}));

        expect(refMock).toHaveBeenCalledWith(database, 'decks');
        expect(getMock).toHaveBeenCalledWith('decks');
        expect(store.getState().api.queries).toMatchObject({
            'getDecks({})': {
                status: 'rejected',
                error: mockError.message,
            },
        });
    });
});