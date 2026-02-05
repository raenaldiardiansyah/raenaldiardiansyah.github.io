import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import NotFound from "./pages/not-found";
import Home from "./pages/Home";
import AGVLineFollower from "./pages/AGV-LineFollower";
import SmartLockDoor from "./pages/Smart-Lock Door";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/AGV-LineFollower" component={AGVLineFollower} />
      <Route path="/Smart-Lock Door" component={SmartLockDoor} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;