import React from "react";
import { CurrentPlan, CurrentChart } from "../../pages";
import "./CurrentMain.css";

function CurrentMain() {
    return (
        <>
            <div className="row current-main-div">
                <div className="col-2"></div>
                <div className="col-4 current-main-plan">
                    <CurrentPlan />
                </div>
                <div className="col-1"></div>
                <div className="col-4 current-main-chart-div">
                    <CurrentChart />
                </div>
                <div className="col-1"></div>
            </div>
        </>
    );
}

export default CurrentMain;
