import { ExpectationContextProvider } from "./contexts/expectationContext";

import ExpectationPage from "./ExpectationPage";

function ExpectationPageWrapper() {
  return (
    <ExpectationContextProvider>
      <ExpectationPage />
    </ExpectationContextProvider>
  );
}

export default ExpectationPageWrapper;
