'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FullPageSlider.module.css';

const FullPageSlider = ({ sections }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const scrollTimeout = useRef(null);
    const autoRotateTimer = useRef(null);

    const handleNext = useCallback(() => {
        if (activeIndex < sections.length - 1) {
            setActiveIndex(prev => prev + 1);
        } else {
            setActiveIndex(0); // Loop back for auto-rotation
        }
    }, [activeIndex, sections.length]);

    const handlePrev = useCallback(() => {
        if (activeIndex > 0) {
            setActiveIndex(prev => prev - 1);
        }
    }, [activeIndex]);

    // Handle auto-rotation
    useEffect(() => {
        autoRotateTimer.current = setInterval(() => {
            handleNext();
        }, 7000);

        return () => clearInterval(autoRotateTimer.current);
    }, [handleNext]);

    // Reset timer on interaction
    const resetTimer = () => {
        if (autoRotateTimer.current) {
            clearInterval(autoRotateTimer.current);
            autoRotateTimer.current = setInterval(() => {
                handleNext();
            }, 7000);
        }
    };

    const onScroll = (e) => {
        if (isAnimating) return;

        resetTimer();
        if (e.deltaY > 0) {
            if (activeIndex < sections.length - 1) {
                setIsAnimating(true);
                handleNext();
            }
        } else {
            if (activeIndex > 0) {
                setIsAnimating(true);
                handlePrev();
            }
        }

        setTimeout(() => setIsAnimating(false), 800);
    };

    const goToSection = (index) => {
        if (index === activeIndex || isAnimating) return;
        resetTimer();
        setIsAnimating(true);
        setActiveIndex(index);
        setTimeout(() => setIsAnimating(false), 800);
    };

    // Touch handling
    const touchStart = useRef(0);
    const onTouchStart = (e) => (touchStart.current = e.touches[0].clientY);
    const onTouchEnd = (e) => {
        const touchEnd = e.changedTouches[0].clientY;
        const diff = touchStart.current - touchEnd;

        if (Math.abs(diff) > 50) {
            if (diff > 0) handleNext();
            else handlePrev();
            resetTimer();
        }
    };

    return (
        <div
            className={styles.sliderWrapper}
            onWheel={onScroll}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            <div
                className={styles.sliderContainer}
                style={{ transform: `translateY(-${activeIndex * 100}vh)` }}
            >
                {sections.map((section, index) => (
                    <div key={index} className={styles.section}>
                        {section.content(index === activeIndex)}
                    </div>
                ))}
            </div>

            <div className={styles.dots}>
                {sections.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
                        onClick={() => goToSection(index)}
                        aria-label={`Go to section ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default FullPageSlider;
