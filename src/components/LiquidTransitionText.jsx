import React from 'react';
import { motion } from 'framer-motion';

const LiquidTransitionText = ({ text, className = "" }) => {
    // Split text into characters
    const letters = text.split("");

    const containerVariants = {
        animate: {
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        },
        exit: {
            transition: {
                staggerChildren: 0.03,
                staggerDirection: -1
            }
        }
    };

    const letterVariants = {
        initial: {
            opacity: 0,
            y: 20,
            scale: 0.9,
            filter: "blur(10px)",
        },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            y: -30,
            scale: 1.1,
            filter: "blur(8px)",
            transition: {
                duration: 0.6,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`inline-block ${className}`}
        >
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    variants={letterVariants}
                    className="inline-block"
                    style={{ whiteSpace: letter === " " ? "pre" : "normal" }}
                >
                    {letter}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default LiquidTransitionText;
