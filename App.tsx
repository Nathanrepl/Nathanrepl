import { Switch, Route, Link } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { queryClient } from "./lib/queryClient";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Join from "@/pages/join";
import NotFound from "@/pages/not-found";

const navigation = [
  { name: "Accueil", path: "/" },
  { name: "À propos", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Rejoindre", path: "/join" },
];

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/join" component={Join} />
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background">
        <header className="border-b">
          <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/">
              <a className="text-2xl font-bold bg-gradient-to-r from this is you
                from-primary to-purple-500 bg-clip-text text-transparent">
                Lyro
              </a>
            </Link>
            
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link key={item.path} href={item.path}>
                  <a className="text-foreground hover:text-primary transition-colors">
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
            
            <MobileNav navigation={navigation} />
          </nav>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Router />
        </main>

        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
