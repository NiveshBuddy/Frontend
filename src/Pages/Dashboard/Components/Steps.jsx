import React, { useState } from "react";
import classes from "../Styles/Steps.module.css"
// import "../Scripts/Steps"

// const handleClick = () => {
//     document.getElementById("index").style=""   
// };

const Steps = () => {

    const [isVisible, setIsVisible] = useState(true);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };
    return (

        <div className={classes.contain}>
            <div className={classes.btnss}>

                <div className={classes.step} id="step" onClick={toggleVisibility} >
                    {/* <span className={classes.text}> */}
                        Construct Portfolio ( Step 1 )
                    {/* </span> */}
                </div>
                    {isVisible ?
                    <div className={classes.options}>
                        <label htmlFor="index" className="block text-sm font-medium text-gray-700">
                            Index
                        </label>

                        <select id="index" name="index" className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            <option value="is_nse_750"> Nifty 750 </option>
                            <option value="is_nse_500"> Nifty 500 </option>
                            <option value="is_nse_large_mid_250"> Nifty Large Midcap 250 </option>
                            <option value="is_nse_200"> Nifty 200 </option>
                            <option value="is_nse_100"> Nifty 100 </option>
                            <option value="is_nse_50"> Nifty 50 </option>
                            <option value="is_nse_next_50"> Nifty Next 50 </option>
                            <option value="is_nse_midcap_150"> Nifty Midcap 150 </option>
                            <option value="is_nse_smallcap_250"> Nifty Smallcap 250 </option>
                            <option value="is_nse_mid_small_400"> Nifty MidSmall Cap 400 </option>
                            <option value="is_nse_microcap_250"> Nifty Microcap 250 </option>
                            <option value="is_nse_fno"> Nifty FnO </option>
                            <option value="is_nse_allcap"> All NSE listed stocks </option>
                        </select>
                    </div>
                    : null}

                <div className={classes.step} onClick={toggleVisibility}>
                    {/* <span className={classes.text}> */}
                        Step 2
                    {/* </span> */}
                </div>

                                            {isVisible ?
                                            
                <div className={classes.options}>

                    <label htmlFor="median_volume" className="block text-sm font-medium text-gray-700">
                         Median Daily Volume (in Rupees) 
                    </label>
                    <select id="median_volume" name="median_volume" className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                        <option value="100000"> One Lakh </option>
                        <option value="1000000"> Ten Lakh </option>
                        <option value="2500000"> Twenty Five Lakh </option>
                        <option value="10000000"> One Crore </option>
                        <option value="20000000"> Two Crore </option>
                        <option value="40000000"> Four Crore </option>
                        <option value="50000000"> Five Crore </option>
                        <option value="80000000"> Eight Crore </option><option value="100000000"> Ten Crore </option>
                    </select>

                    <label htmlFor="away_from_high" className="block text-sm font-medium text-gray-700"> 
                        Away from One Year High 
                    </label>
                    <select id="away_from_high" name="away_from_high" className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                        <option value="-10"> Within 10% </option>
                        <option value="-20"> Within 20% </option>
                        <option value="-25"> Within 25% </option>
                        <option value="-30"> Within 30% </option>
                        <option value="-40"> Within 40% </option>
                        <option value="-50"> Within 50% </option>
                        <option value="-100"> No Filter </option>
                    </select>

                </div>
                    : null}
                    
                <div className={classes.step}>
                    {/* <span className={classes.text}> */}
                        Step 3
                    {/* </span> */}
                </div>

                <div className={classes.options}>
                    <label htmlFor="sort_by" className="block text-sm font-medium text-gray-700"> 
                        Sort By 
                    </label>
                    <select id="sort_by" name="sort_by" className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                    <option value="return_one_year"> Absolute Return One Year </option>
                    <option value="return_twelve_one"> 12M ROC - 1M ROC Return </option>
                    <option value="sharpe_return"> Sharpe Return One Year </option>
                    <option value="sharpe_return_nine_months"> Sharpe Return Nine Months </option>
                    <option value="sharpe_return_six_months"> Sharpe Return Six Months </option>
                    <option value="sharpe_return_three_months"> Sharpe Return Three Months </option>
                    <option value="sharpe_return_one_months"> Sharpe Return One Month </option>
                    <option value="sharpe_return_twelve_six_months"> Average Sharpe of Twelve and Six Months </option>
                    <option value="sharpe_return_twelve_six_three_months"> Average Sharpe of Twelve, Six &amp; Three Months </option>
                    <option value="sharpe_return_twelve_nine_six_three_months"> Average Sharpe of Twelve, Nine, Six &amp; Three Months </option>
                    <option value="return_nine_months"> Absolute Return Nine Months </option>
                    <option value="return_six_months"> Absolute Return Six Months </option>
                    <option value="return_three_months"> Absolute Return Three Months </option>
                    <option value="return_one_months"> Absolute Return One Month </option>
                    <option value="volatility"> Annual Volatility </option>
                    <option value="beta"> Annual Beta to Nifty 50 </option>
                    <option value="away_from_all_time_high"> Away from ATH </option>
                    <option value="sharpe_beta_return"> Sharpe Return One Year / Beta </option>
                    <option value="sharpe_twelve_six_months_beta_return"> Average Sharpe of Twelve &amp; Six Months / Beta </option>
                    <option value="sharpe_twelve_six_three_months_beta_return"> Average Sharpe of Twelve, Six &amp; Three Months / Beta </option>
                    <option value="sharpe_twelve_nine_six_three_months_beta_return"> Average Sharpe of Twelve, Nine, Six &amp; Three Months / Beta </option>
                    </select>

                </div>

                <div className={classes.step}>
                    <span className={classes.text}>
                        Step 4
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Steps;