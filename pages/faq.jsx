import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Menu from "@/components/Menu";
import { BsQuestionSquare } from "react-icons/bs";

function faq() {
  return (
    <Layout>
      <Menu />
      <h2 className="flex gap-3 text-3xl md:text-4xl font-bold px-3 md:px-20 py-7 md:py-10 text-sky-500 items-center">
        {" "}
        <BsQuestionSquare />
        FAQ
      </h2>

      <div className="px-3 md:px-20 py-5 flex flex-col gap-5 max-w-7xl">
        <div className="bg-slate-800 px-2 py-2 rounded shadow shadow-white">
          <h3 className="text-xl pb-2 font-bold">¿Cómo son nuestros envíos locales?</h3>
          <p className="text-lg md:text-base">Los gastos de envío y manipulación se calcularán automáticamente y se añadirán a su pedido en función del peso total del mismo. Tendrá la oportunidad de revisar la estimación final de los gastos de envío y manipulación antes de finalizar el pedido.</p>
        </div>
        <div className="bg-slate-800 px-2 py-2 rounded shadow shadow-white">
          <h3 className="text-xl pb-2 font-bold">¿Aceptamos envíos internacionales?</h3>
          <p className="text-lg md:text-base">
            Los pedidos internacionales tardan más en enviarse y tramitarse. En
            algunos casos, los pedidos internacionales pueden tardar hasta 8
            semanas desde su salida de EE.UU. en ser entregados. Si la
            información de seguimiento llegó por última vez a EE.UU. y no se ha
            actualizado recientemente, lo más probable es que aún esté de camino
            hacia allí. Una vez que llegue al siguiente destino, se escaneará el
            paquete y se actualizará la información de seguimiento.
          </p>
          <p className="pt-2 text-lg md:text-base">
            Nuestros gastos de envío no incluyen los impuestos de importación o
            de aduanas. Esto es algo común en los pedidos internacionales y
            desafortunadamente no tenemos control sobre ellos. Si el envío fuera
            de los EE.UU., las obligaciones adicionales de importación y los
            costos están asociados. Para fines personales, prepárese para
            trabajar con el servicio de mensajería (FedEx, UPS, etc.) para
            despachar aduanas y pagar cualquier coste adicional de importación.
          </p>
        </div>
        <div className="bg-slate-800 px-2 py-2 rounded shadow shadow-white">
          <h3 className="text-xl pb-2 font-bold">¿Dónde puedo encontrar el seguimiento de mi paquete?</h3>
          <p className="text-lg md:text-base">
            El seguimiento se le enviará por correo electrónico cuando se envíe
            el paquete.
          </p>
        </div>
        <div className="bg-slate-800 px-2 py-2 rounded shadow shadow-white">
          <h3 className="text-xl pb-2 font-bold">¿Puedo devolver/cambiar un artículo por una talla diferente?</h3>
          <p className="text-lg md:text-base">
            Sí, queremos clientes satisfechos. Si tu equipación no te queda como
            esperabas, estaremos encantados de cambiártela por una talla
            diferente. Ponte en contacto con nosotros y te ayudaremos.
          </p>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}

export default faq;
