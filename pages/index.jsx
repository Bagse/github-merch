import Link from "next/link";
import Layout from "@/components/layout";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div>
      <Layout title="Bienvenido">
        <Menu/>
      </Layout>

    </div>
  );
}
