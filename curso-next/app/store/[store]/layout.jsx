import "@styles/globals.css";
import StoreNav from "@components/customerStore/StoreNav";
import Provider from "@components/Provider";

export const medatada = {
  title: "Cratosoft Comparador de Precios",
  description: "Compara precios entre productos y servicios de Costa Rica",
};

const RootLayout = ({children, params}) => {
  return (
      <section className="!bg-white w-full">
        <StoreNav/>
      {children}
    </section>
  );
};

export default RootLayout;
