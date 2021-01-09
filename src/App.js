import Navbar from "./JS/Navbar";
import Home from "./JS/Home";
import Contact from "./JS/Contact";
import "../src/css/style.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageContent from "./JS/PageContent";
import { ThemeProvider } from "./JS/ThemeContext";
import { LanguageProvider } from "./JS/LanguageContext";

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <PageContent>
          <LanguageProvider>
            <BrowserRouter>
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </BrowserRouter>
          </LanguageProvider>
        </PageContent>
      </ThemeProvider>
    </div>
  );
};
export default App;
