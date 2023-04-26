import CarritoCompras from '@/components/CarritoComprasData'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <CarritoCompras>
      <Component {...pageProps} />
    </CarritoCompras>
  )
}
