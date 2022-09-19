import React from "react";
import "./Home.css";
import {
    FinanceManagement,
    RoomManagement,
    EmployeeManagement,
    SalesAndMarketingManagement,
    StockManagement,
    DeliveryManagement,
    VehicleManagement,
    FoodAndBeverageManagement,
} from "../../assets/images";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { ContainedButton } from "../../components/atomic";

function Home() {
    return (
        <div className="home">
            <ContainedButton
                className="home-log-out"
                variant="contained"
                size="medium"
                color="default"
                startIcon={<AiIcons.AiOutlineLogout />}
                text="Logout"
            />

            <div className="row top-div">
                <div className="col-2 top-div-1">
                    <img
                        src={FinanceManagement}
                        alt="finanace-management"
                        className="home-img"
                    />
                    <h5 className="title-head">Finance Management</h5>
                    <Link to="#">
                        <ContainedButton
                            className="btn-home"
                            variant="contained"
                            size="medium"
                            color="default"
                            startIcon={<FaIcons.FaArrowCircleRight />}
                            text="Go"
                        />
                    </Link>
                </div>
                <div className="col-1"></div>
                <div className="col-2 top-div-1">
                    <img
                        src={RoomManagement}
                        alt="room-management"
                        className="home-img"
                    />
                    <h5 className="title-head">Room Management</h5>
                    <Link to="#">
                        <ContainedButton
                            className="btn-home-room"
                            variant="contained"
                            size="medium"
                            color="default"
                            startIcon={<FaIcons.FaArrowCircleRight />}
                            text="Go"
                        />
                    </Link>
                </div>
                <div className="col-1"></div>
                <div className="col-2 top-div-1">
                    <img
                        src={EmployeeManagement}
                        alt="employee-management"
                        className="home-img"
                    />
                    <h5 className="title-head">Employee Management</h5>
                    <Link to="#">
                        <ContainedButton
                            className="btn-home"
                            variant="contained"
                            size="medium"
                            color="default"
                            startIcon={<FaIcons.FaArrowCircleRight />}
                            text="Go"
                        />
                    </Link>
                </div>
                <div className="col-1"></div>
                <div className="col-2 top-div-1">
                    <img
                        src={SalesAndMarketingManagement}
                        alt="sales-and-marketing-management"
                        className="home-img"
                    />
                    <h5 className="title-head">Sales & Marketing Management</h5>
                    <Link to="/current">
                        <ContainedButton
                            className="btn-home"
                            variant="contained"
                            size="medium"
                            color="default"
                            startIcon={<FaIcons.FaArrowCircleRight />}
                            text="Go"
                        />
                    </Link>
                </div>
            </div>

            <div className="row bottom-div">
                <div className="col-2 bottom-div-1">
                    <img
                        src={StockManagement}
                        alt="stock-management"
                        className="home-img"
                    />
                    <h5 className="title-head">Stock Management</h5>
                    <Link to="#">
                        <ContainedButton
                            className="btn-home-stock"
                            variant="contained"
                            size="medium"
                            color="default"
                            startIcon={<FaIcons.FaArrowCircleRight />}
                            text="Go"
                        />
                    </Link>
                </div>
                <div className="col-1"></div>
                <div className="col-2 bottom-div-1">
                    <img
                        src={DeliveryManagement}
                        alt="delivery-management"
                        className="home-img"
                    />
                    <h5 className="title-head">Delivery Management</h5>
                    <Link to="#">
                        <ContainedButton
                            className="btn-home"
                            variant="contained"
                            size="medium"
                            color="default"
                            startIcon={<FaIcons.FaArrowCircleRight />}
                            text="Go"
                        />
                    </Link>
                </div>
                <div className="col-1"></div>
                <div className="col-2 bottom-div-1">
                    <img
                        src={VehicleManagement}
                        alt="vehicle-management"
                        className="home-img"
                    />
                    <h5 className="title-head">Vehicle Management</h5>
                    <Link to="#">
                        <ContainedButton
                            className="btn-home-vehicle"
                            variant="contained"
                            size="medium"
                            color="default"
                            startIcon={<FaIcons.FaArrowCircleRight />}
                            text="Go"
                        />
                    </Link>
                </div>
                <div className="col-1"></div>
                <div className="col-2 bottom-div-1">
                    <img
                        src={FoodAndBeverageManagement}
                        alt="food-and-beverage-management"
                        className="home-img"
                    />
                    <h5 className="title-head">Food & Beverage Management</h5>
                    <Link to="#">
                        <ContainedButton
                            className="btn-home"
                            variant="contained"
                            size="medium"
                            color="default"
                            startIcon={<FaIcons.FaArrowCircleRight />}
                            text="Go"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
