import Layout from "@/components/Layout";
import { getItems } from "@/services/ItemService";
import Image from "next/legacy/image";
import Menu from "@/components/Menu";

function store({ items }) {
  return (
    <Layout>
      <Menu/>
      <h1>Store</h1>
      {items &&
        items.map((item) => (
          <div className="px-5 py-3" key={item.id}>
            <div className="flex flex-col place-items-center gap-3 ">
              <h1>{item.title}</h1>
              <Image
                className="rounded-md"
                src={item.image}
                alt={item.title}
                width={"240"}
                height={"240"}
              />
            </div>
          </div>
        ))}
    </Layout>
  );
}

export default store;

export async function getStaticProps() {
  const res = await getItems();

  return {
    props: {
      items: res,
    },
  };
}
