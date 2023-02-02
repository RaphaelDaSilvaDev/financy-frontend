import { Home } from "./components/HomePage";
import { HomeContextProvider } from "./context";

export function HomePage() {
  return (
    <HomeContextProvider>
      <Home />
    </HomeContextProvider>
  );
}
