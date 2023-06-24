import { motion, } from "framer-motion";

function Contact() {
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
        className="contact component"
      >
      <h1> Contact Component </h1>
      </motion.div>
    );
  }
  export default Contact