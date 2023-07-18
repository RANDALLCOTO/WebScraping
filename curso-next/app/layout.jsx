import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Loading from "./loading";

export const medatada = {
  title: "Cratosoft Comparador de Precios",
  description: "Compara precios entre productos y servicios de Costa Rica",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="/*https*/://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2352598190573902"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="__variable_7dbc08 __variable_20951f">
        <Provider>
          <div  className="main">
           <div />
          </div>
          <main className="app">
            <Nav />
               {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
