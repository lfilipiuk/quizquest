import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";

function Layout() {
  return <div>This is layout</div>;
}

function DecksList() {
  return <div className={'font-bold text-white'}>This is Decks list</div>;
}

function Deck() {
  return <div>This is a deck</div>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DecksList />} />

        {/*<Route path="deck/:deckId" element={<Deck />} />*/}

        {/*//Catch all route*/}
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Route>
    </Routes>
  );
}

export default App;
