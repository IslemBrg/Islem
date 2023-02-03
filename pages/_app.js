import '@/styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import NavBar from './components/NavBar'

export default function App({ Component, pageProps }) {
  return (
  <>
    <AnimatePresence>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.7, duration: 0.7}}
      >
        <NavBar/>
      </motion.nav>
    </AnimatePresence>
    <Component {...pageProps} />
  </>
  )
}
