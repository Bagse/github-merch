import Layout from "@/components/Layout";
import Menu from "@/components/Menu";
import Product from "@/components/Product";
import { getItemData, getPathsFromIds } from "@/lib/utils";

function ProductPage({ productInfo }) {
  return (
    <Layout>
      <Menu />
      <Product item={productInfo} showAs="Page" />
    </Layout>
  );
}

export default ProductPage;

export async function getStaticPaths() {
  const paths = await getPathsFromIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const product = await getItemData(id);

  return {
    props: {
      productInfo: product,
    },
  };
}
