import { motion } from "framer-motion";

function Home() {
    const routeVariants = {
        initial: {
            y: '100vh'
        },
        final: {
            y: '0vh'
        }
    }
    return (
      <motion.div
        variants={routeVariants}
        initial="initial"
        animate="final"
        className="home component"
      >
      <h1> Home Component </h1>
      </motion.div>
    );
  }
  export default Home