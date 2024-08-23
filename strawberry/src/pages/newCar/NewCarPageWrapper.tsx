import { NewCarContextProvider } from "./contexts/NewCarContext";
import NewCarPage from "./NewCarPage";

function NewCarPageWrapper() {
  return (
    <NewCarContextProvider>
      <NewCarPage />
    </NewCarContextProvider>
  );
}

export default NewCarPageWrapper;
