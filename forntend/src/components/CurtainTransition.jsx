import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function CurtainTransition({ children }) {
    const [show, setShow] = useState(true);

    return (
        <>
            <AnimatePresence>
                {show && (
                    <motion.div
                        className="fixed inset-0 z-[9999] pointer-events-none"
                        initial="initial"
                        animate="animate"
                        onAnimationComplete={() => setShow(false)}
                    >

                        {/* Main background */}
                        <motion.div
                            className="absolute inset-0 bg-[#120D18]"
                            variants={{
                                initial: {
                                    opacity: 1,
                                },
                                animate: {
                                    opacity: 0,
                                },
                            }}
                            transition={{
                                duration: 1.5,
                                delay: 1.8,
                                ease: "easeInOut",
                            }}
                        />

                        {/* Left curtain */}
                        <motion.div
                            className="absolute top-0 left-0 h-full w-1/2 bg-[#211329]"
                            variants={{
                                initial: {
                                    x: 0,
                                },
                                animate: {
                                    x: "-100%",
                                },
                            }}
                            transition={{
                                duration: 2.5,
                                ease: [0.76, 0, 0.24, 1],
                            }}
                        />

                        {/* Right curtain */}
                        <motion.div
                            className="absolute top-0 right-0 h-full w-1/2 bg-[#211329]"
                            variants={{
                                initial: {
                                    x: 0,
                                },
                                animate: {
                                    x: "100%",
                                },
                            }}
                            transition={{
                                duration: 2.5,
                                ease: [0.76, 0, 0.24, 1],
                            }}
                        />

                        {/* Logo / Title */}
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            variants={{
                                initial: {
                                    opacity: 1,
                                    scale: 1,
                                },
                                animate: {
                                    opacity: 0,
                                    scale: 1.15,
                                },
                            }}
                            transition={{
                                duration: 1,
                                delay: 1.2,
                                ease: "easeInOut",
                            }}
                        >
                            <h1 className="text-4xl md:text-6xl font-bold tracking-[0.3em] text-[var(--theme-color)]">
                                PORTFOLIO
                            </h1>
                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>

            {children}
        </>
    );
}

export default CurtainTransition;