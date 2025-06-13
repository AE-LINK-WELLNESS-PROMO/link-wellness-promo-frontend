import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import SplashPage from "./pages/SplashPage";
import LoginPage from "./pages/LoginPage";
import BasicInfo from "./pages/BasicInfo";
import BmiPage from "./pages/BmiPage";
import { UserInfoProvider } from "./context/UserInfoContext";
import { LoadingProvider, useLoading } from "./context/LoadingContext";
import LoadingOverlay from "./components/LoadingOverlay";
import QuestionsPage from "./pages/QuestionsPage";
import ResultPage from "./pages/ResultPage";
import CardSelectionPage from "./pages/CardSelectionPage";
import OtpPage from "./pages/OtpPage";
import { isAuthenticated } from "./services/TokenService";
import { useEffect } from "react";
import { setLoadingStateManager } from "./common/AxiosInstance";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const authed = isAuthenticated();
  const location = useLocation();
  if (!authed) {
    // If not authenticated, redirect to login unless already on /, /login, or /otp
    if (location.pathname === "/" || location.pathname === "/login" || location.pathname === "/otp") {
      return <>{children}</>;
    }
    return <Navigate to="/login" replace />;
  } else {
    // If authenticated, block /login and /otp
    if (location.pathname === "/login" || location.pathname === "/otp") {
      return <Navigate to="/basic" replace />;
    }
    return <>{children}</>;
  }
}

// Component to initialize loading state manager
function LoadingStateInitializer() {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    // Connect the loading state to axios
    setLoadingStateManager({ setIsLoading });
  }, [setIsLoading]);

  return null;
}

// Component to render the loading overlay
function AppContent() {
  const { isLoading } = useLoading();
  
  return (
    <>
      <LoadingStateInitializer />
      <LoadingOverlay isLoading={isLoading} />
      <Router>
        <ProtectedRoute>
          <Routes>
            <Route path="/" element={<SplashPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/otp" element={<OtpPage />} />
            <Route path="/basic" element={<BasicInfo />} />
            <Route path="/bmi" element={<BmiPage />} />
            <Route path="/quiz" element={<QuestionsPage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/card-selection" element={<CardSelectionPage />} />
          </Routes>
        </ProtectedRoute>
      </Router>
    </>
  );
}

function App() {
  return (
    <LoadingProvider>
      <UserInfoProvider>
        <AppContent />
      </UserInfoProvider>
    </LoadingProvider>
  );
}

export default App;
