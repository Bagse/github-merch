import Layout from "@/components/Layout";
import { getItems } from "@/services/ItemService";
import Menu from "@/components/Menu";
import Product from "@/components/Product";
import {IoStorefrontOutline} from "react-icons/io5"
import Footer from "@/components/Footer";

function store({ items }) {
  return (
    <Layout>
      <Menu/>
      <h1 className="flex gap-3 text-4xl font-bold px-20 py-10 text-sky-500"><IoStorefrontOutline/>Store</h1>
      <div className="grid grid-cols-4 gap-5 px-20 py-5">
      {items &&
        items.map((item) => (
          <Product key={item.id} item={item} showAs="Default" />
        ))}
      </div>
      
      <Footer />
    </Layout>
  );
}

export default store;

export async function getStaticProps() {
  try {
    const items = await getItems();
    return {
      props: {
        items: items || [], // Si los datos son nulos, se proporciona un arreglo vacío como valor predeterminado
      },
    };
  } catch (error) {
    console.error("Error al obtener los datos de los productos:", error);
    return {
      props: {
        items: [], // Si ocurre un error, se proporciona un arreglo vacío
      },
    };
  }
}







