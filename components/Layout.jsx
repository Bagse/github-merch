import Head from "next/head";
import ShoppingCart from "./ShoppingCart";

function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>Github Merch {title ? `| ${title}` : ""}</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="Merch Github by Bagse" />
        <link rel="shortcut icon" href="/shopping.ico" type="image/x-icon" />
      </Head>

      <div className="">{children}</div>
      <ShoppingCart />
    </div>
  );
}

export default Layout;
