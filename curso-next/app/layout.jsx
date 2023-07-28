import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Loading from "./loading";
import ScrollToTopButton from "@components/ScrollToTop";

export const medatada = {
  title: "Cratosoft Comparador de Precios",
  description: "Compara precios entre productos y servicios de Costa Rica",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>

      </head>
      <body className="__variable_7dbc08 __variable_20951f">
        <Provider>
          <div  className="main">
           <div />
          </div>
          <main className="app">
            <Nav />
               {children}
               <ScrollToTopButton/>
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
