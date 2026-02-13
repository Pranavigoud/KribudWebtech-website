import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        opacity: 0,
        x: -20
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: "easeInOut"
        }
    },
    exit: {
        opacity: 0,
        x: 20,
        transition: {
            duration: 0.7,
            ease: "easeInOut"
        }
    }
};

const PageTransition = ({ children }) => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex-grow" // Ensure it takes full width and grows with flex
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
