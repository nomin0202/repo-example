import { motion, useAnimation } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
const AnimationTest = () => {
    const controls = useAnimation();
    const startAnimation = () => {
        controls.start({ x: 100, opacity: 1 });
    };
    const [isVisible, setIsVisible] = useState(true);
    const box = {
        width: 100,
        height: 100,
        backgroundColor: "#ff0088",
        borderRadius: 5,
    }
    return (

        <div style={{ color: 'red' }}>
            <motion.div
                style={box}
                animate={{ rotate: 360 }}
                transition={{ duration: 1 }}
            />
            <motion.div
                initial={{ opacity: 0 }} // 초기 상태
                animate={{ opacity: 1 }}  // 애니메이션 완료 상태
                transition={{ duration: 5 }} // 애니메이션 시간
            >
                Hello, Framer Motion!
                Hello, Framer Motion!
                Hello, Framer Motion!
            </motion.div>
            <motion.div
                whileInView={{ scale: 2 }}
                // whileHover={{ scale: 1.2 }} // hover 시 크기 커짐
                whileTap={{ scale: 0.8 }}   // 클릭 시 크기 줄어듦
                style={{ width: '100px', height: '100px', backgroundColor: 'skyblue', margin: '100px' }}
            >
                Click me!
            </motion.div>
            <div>
                <motion.div
                    animate={controls}
                    initial={{ x: 0, opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    Animate Me!
                </motion.div>
                <button onClick={startAnimation}>Start Animation</button>
            </div>
            <div style={{ color: 'white' }}>
                <button onClick={() => setIsVisible(!isVisible)}>
                    Toggle Page
                </button>
                <AnimatePresence>
                    {isVisible && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 3 }}
                        >
                            This is a page!
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>

    );
};

export default AnimationTest;
