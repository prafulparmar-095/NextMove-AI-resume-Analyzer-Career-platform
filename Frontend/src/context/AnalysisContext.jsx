import { createContext, useState } from "react"

export const AnalysisContext = createContext()

export function AnalysisProvider({ children }) {
  const [analysisResult, setAnalysisResult] = useState(null)
  const [uploadedResume, setUploadedResume] = useState(null)
  const [history, setHistory] = useState([])

  function clearAnalysis() {
    setAnalysisResult(null)
    setUploadedResume(null)
  }

  return (
    <AnalysisContext.Provider
      value={{
        analysisResult,
        setAnalysisResult,
        uploadedResume,
        setUploadedResume,
        history,
        setHistory,
        clearAnalysis
      }}
    >
      {children}
    </AnalysisContext.Provider>
  )
}