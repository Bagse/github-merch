import Layout from "@/components/Layout";
import Menu from "@/components/Menu";
import Product from "@/components/Product";
import { getLatestItems } from "@/services/ItemService";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home({ items }) {
  return (
    <div>
      <Layout title="Bienvenido">
        <Menu />

        <div className="px-48 relative flex">
          <div className="w-full h-[550px]">
            <Image
              className="py-10 w-full h-[550px] object-cover opacity-50"
              src="/banner.webp"
              width={1280}
              height={1200}
            />
          </div>
          <div className="absolute z-10 flex flex-col justify-start px-10 py-24">
            <div className="px-3 py-5">
              <h2 className="text-5xl font-extrabold  max-w-md mx-auto">Compra la Colección Verano 2023!</h2>
              <p className="max-w-md mx-auto pt-3">
                Sube de nivel tu comodidad esta temporada con nuestra nueva
                Colección Verano -- nuevos modelos de joggers, polos, poleras,
                gorras, etc. Y por primera vez Pack de Riñoneras Cotopaxi.
              </p>
            </div>
          </div>
        </div>

        <div className="px-48">
          <div>
            <h3 className="text-2xl my-5">Últimos Productos</h3>
          </div>

          <div className="grid grid-cols-3 gap-5">
            {items &&
              items.map((item) => (
                <Product key={item.id} item={item} showAs="item" />
              ))}
          </div>
        </div>

        <Footer />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const items = await getLatestItems();

  return {
    props: {
      items,
    },
  };
}
