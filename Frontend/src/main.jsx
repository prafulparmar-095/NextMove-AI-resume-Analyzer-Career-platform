import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import App from "./App"
import "./index.css"
import { AuthProvider } from "./context/AuthContext"
import { ResumeProvider } from "./context/ResumeContext"
import { AnalysisProvider } from "./context/AnalysisContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ResumeProvider>
          <AnalysisProvider>
            <App />
            <Toaster position="top-right" />
          </AnalysisProvider>
        </ResumeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)