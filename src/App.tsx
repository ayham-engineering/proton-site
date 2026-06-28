import { ThemeProvider } from "./lib/ThemeContext";
import { LanguageProvider } from "./lib/LanguageContext";
import { ProgressProvider } from "./lib/ProgressContext";
import { ViewProvider } from "./lib/ViewContext";
import AppShell from "./components/AppShell";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ProgressProvider>
          <ViewProvider>
            <AppShell />
          </ViewProvider>
        </ProgressProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
