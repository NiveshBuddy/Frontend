import React from "react";
import classes from "../Styles/SectionTwo.module.css";
import { motion } from "framer-motion";

const SectionTwo = () => {
  return (
    <main>
      <div className={classes.main}>
        <div className={classes.content}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.5 },
            }}
            className={classes.head}
          >
            Your ultimate destination for timely insights
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.5 },
            }}
            className={classes.cards}
          >
            {/* 1st card */}
            <div className={classes.card}>
              <div className={classes.first_content}>
                <span>Portfolio Backtesting</span>
              </div>
              <div className={classes.second_content}>
                <span>
                  Validate strategy performance using historical data and gain
                  valuable insights.
                </span>
              </div>
            </div>

            {/* 2nd card */}
            <div className={classes.card}>
              <div className={classes.first_content}>
                <span>Financial Education</span>
              </div>
              <div className={classes.second_content}>
                <span>
                  Learn the art of algorithmic-based investing from our
                  expert-led content.
                </span>
              </div>
            </div>

            {/* 3rd card */}
            <div className={classes.card}>
              <div className={classes.first_content}>
                <span>Investors Community</span>
              </div>
              <div className={classes.second_content}>
                <span>
                  Engage with like-minded individuals, share insights, and learn
                  from each other.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default SectionTwo;
