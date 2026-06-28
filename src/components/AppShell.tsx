import { AnimatePresence, motion } from "framer-motion";
import { useView } from "../lib/ViewContext";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import ModuleDetail from "./ModuleDetail";
import About from "./About";
import Footer from "./Footer";

export default function AppShell() {
  const { view } = useView();

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <TopBar />

      <div className="pt-16 flex flex-col md:flex-row max-w-[1600px] mx-auto">
        <Sidebar className="md:w-60 shrink-0 border-b md:border-b-0 md:border-e" />

        <main className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            {view.name === "dashboard" && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <Dashboard />
              </motion.div>
            )}
            {view.name === "about" && (
              <motion.div
                key="about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <About />
              </motion.div>
            )}
            {view.name === "module" && (
              <ModuleDetail key={`module-${view.moduleId}`} moduleId={view.moduleId} />
            )}
          </AnimatePresence>
        </main>
      </div>

      <Footer />
    </div>
  );
}
