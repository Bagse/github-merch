import Head from "next/head";

function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>Github Merch {title ? `| ${title}` : ""}</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="Mi tienda" />
      </Head>

      <div className="">{...children}</div>
    </div>
  );
}

export default Layout;
