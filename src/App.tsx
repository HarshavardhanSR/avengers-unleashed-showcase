import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Characters from "./pages/Characters";
import CharacterDetail from "./pages/CharacterDetail";
import Relationships from "./pages/Relationships";
import NotFound from "./pages/NotFound";
import JarvisChat from "./components/JarvisChat";
import MusicToggle from "./components/MusicToggle";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/relationships" element={<Relationships />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <JarvisChat />
        <MusicToggle />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
