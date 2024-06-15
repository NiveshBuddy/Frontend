import React from "react";
import classes from "../Styles/PicHead.module.css"
// import img1 from "../Assets/img1.jpg"

const PicHead = () => {
    return (
        <main>
            <div className={classes.content}>
                <div className={classes.text}>
                    <div className={classes.head}>
                        Enhance Your Investment Knowledge
                    </div>
                    <div className={classes.bakiContent}>
                        
                        <div className={classes.stepPart}>
                            <div className={classes.stepHead}>Curated Finance Education</div>
                            <div className={classes.stepContent}>Learn the art of algorithmic-based investing from our expert-led content.</div>
                        </div>

                        <div className={classes.stepPart}>
                            <div className={classes.stepHead}>Leverage Platform Effectively</div>
                            <div className={classes.stepContent}>Master the NiveshBuddy tools and features to maximize your investing prowess.</div>
                        </div>

                        <div className={classes.stepPart}>
                            <div className={classes.stepHead}>Achieve Financial Success</div>
                            <div className={classes.stepContent}>Gain the knowledge and confidence to make informed investment decisions.</div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default PicHead;