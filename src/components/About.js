import { motion, } from "framer-motion";

function About() {
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
        className="about component"
      >
       <h1>  About Component </h1>
      </motion.div>
    )
}
export default About;