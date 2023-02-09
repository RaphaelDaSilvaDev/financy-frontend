import { useEffect } from "react";
import { Home } from "./components/HomePage";
import { HomeContextProvider } from "./context";

export function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 1);
  }, []);
  return (
    <HomeContextProvider>
      <Home />
    </HomeContextProvider>
  );
}
