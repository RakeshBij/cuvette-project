import Home from "./pages/Home";
import DataProvider from "./store/data";

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
