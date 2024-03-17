import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import GlobalStyles from "./styles/GlobalStyles";
import AuthLayout from "./__auth/AuthLayout";
import { Login, Register } from "./__auth/pages";
import RootLayout from "./__root/RootLayout";
import { ChatPage } from "./__root/pages";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="signin" element={<Login />} />
          <Route path="signup" element={<Register />} />
        </Route>

        <Route element={<RootLayout />}>
          <Route index element={<ChatPage />} />
        </Route>
      </Routes>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          margin: "8px",
        }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--backgraund-color)",
            color: "var(--text-color)",
          },
        }}
      />
    </>
  );
}

export default App;
