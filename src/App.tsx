import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./pages/Dashboard";
import JobAnalysis from "./pages/JobAnalysis";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Profile from "./pages/Profile";
import ResumeBuilder from "./pages/ResumeBuilder";
import Signup from "./pages/Signup";
import Support from "./pages/Support";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

const App = () => (
	<QueryClientProvider client={queryClient}>
		<TooltipProvider>
			<AuthProvider>
				<Toaster />
				<Sonner />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/builder" element={<ResumeBuilder />} />
						<Route path="/builder/:id" element={<ResumeBuilder />} />
						<Route path="/analysis" element={<JobAnalysis />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/support" element={<Support />} />
						<Route path="/terms" element={<Terms />} />
						<Route path="/privacy" element={<Privacy />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</AuthProvider>
		</TooltipProvider>
	</QueryClientProvider>
);

export default App;
