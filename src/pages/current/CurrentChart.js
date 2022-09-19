import React from "react";
import { Pie } from "react-chartjs-2";

function CurrentChart() {
    return (
        <>
            <div className="available-chart-div">
                <Pie
                    data={{
                        labels: [
                            "Hospitality",
                            "contingency of Budget",
                            "Actual Profit",
                            "Expenditure",
                        ],
                        datasets: [
                            {
                                data: [35, 20, 24, 21],
                                backgroundColor: [
                                    "rgb(255, 99, 132)",
                                    "rgb(54, 162, 235)",
                                    "rgb(255, 205, 86)",
                                    "rgba(75, 192, 192, 0.2)",
                                ],
                                hoverOffset: 4,
                            },
                        ],
                    }}
                    height={400}
                    width={500}
                    options={{
                        maintainAspectRatio: true,
                    }}
                />
            </div>
        </>
    );
}

export default CurrentChart;
