import React, { useEffect, useState } from "react";
import { ContainedButton } from "../../components/atomic";
import * as IoIcons from "react-icons/io";
import "./CurrentMain.css";
import {
    Dialog,
    DialogActions,
    DialogContent,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
} from "@material-ui/core";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { UseFormSales } from "../../components/items/UseFormSales";
import Axios from "axios";

function CurrentPlan() {
    const [openAdd, setOpenAdd] = useState(false);

    const handleClickOpenAdd = () => {
        setOpenAdd(true);
    };
    const handleCloseAdd = () => {
        setOpenAdd(false);
    };

    const [date, setDate] = useState(new Date());
    const initialValues = {
        planname: "",
        budget: "",
        date: new Date(),
        reason: "",
    };

    const validate = (fieldValues = values) => {
        console.log(fieldValues);
        let temp = { ...errors };
        let numbers = /^[0-9]+$/;
        if ("planname" in fieldValues) {
            temp.planname = fieldValues.planname
                ? ""
                : "This field is required.";
        }

        if ("budget" in fieldValues) {
            temp.budget = numbers.test(fieldValues.budget)
                ? ""
                : "Please input numeric characters only";
        }

        if ("reason" in fieldValues) {
            temp.reason = fieldValues.reason ? "" : "This field is required.";
        }

        setErrors({
            ...temp,
        });

        if (fieldValues === values)
            return Object.values(temp).every((x) => x === "");
    };

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
    } = UseFormSales(initialValues, true, validate);

    const [currentPlanList, setcurrentPlanList] = useState([]);

    const addCurrentPlan = (e) => {
        e.preventDefault();
        if (validate()) {
            Axios.post("http://localhost:3001/current/addcurrent", {
                planname: values.planname,
                date: date,
                budget: parseInt(values.budget),
                reason: values.reason,
            }).then(() => {
                console.log("Success");
                alert("Plan Successfully Added");
            });
        }
    };

    const showCurrentPlan = () => {
        Axios.get("http://localhost:3001/current/showcurrent").then(
            (response) => {
                setcurrentPlanList(response && response.data);
                console.log("showRecord", response.data);
            }
        );
    };

    useEffect(() => {
        showCurrentPlan();
    }, []);

    return (
        <>
            <h2
                style={{
                    color: "green",
                    fontWeight: "600",
                }}
                className="Plan-head"
            >
                Current Business Plan Details
            </h2>
            <br />
            <br />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <b>Name of the plan</b>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentPlanList.map((val, key) => (
                            <TableRow>
                                <TableCell>
                                    <t />
                                    {val.planname}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <b>Budget of the plan</b>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentPlanList.map((val, key) => (
                            <TableRow>
                                <TableCell>
                                    <t />
                                    {val.budget}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <b>Date of Launch</b>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentPlanList.map((val, key) => (
                            <TableRow>
                                <TableCell>
                                    <t />
                                    {val.date}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <ContainedButton
                className="add-new-current"
                variant="contained"
                size="medium"
                color="default"
                onClick={handleClickOpenAdd}
                startIcon={<IoIcons.IoMdAdd />}
                text="Add New"
            />

            <div>
                <Dialog open={openAdd}>
                    <DialogContent>
                        <center>
                            <h2>Add Current Plan</h2>
                            <form
                                className="add-from-div"
                                onSubmit={addCurrentPlan}
                            >
                                <Grid container>
                                    <TextField
                                        autoComplete="off"
                                        className="input"
                                        id="standard-basic"
                                        label="Name of the plan"
                                        name="planname"
                                        value={values.planname}
                                        onChange={handleInputChange}
                                    />
                                    <span className="errorMsg">
                                        {errors.planname}
                                    </span>
                                    <TextField
                                        autoComplete="off"
                                        className="input"
                                        id="standard-basic"
                                        label="Budget of the new business plan"
                                        name="budget"
                                        value={values.budget}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <span className="errorMsg">
                                        {errors.budget}
                                    </span>
                                    <MuiPickersUtilsProvider
                                        utils={DateFnsUtils}
                                    >
                                        <KeyboardDatePicker
                                            className="date-picker"
                                            disableToolbar
                                            variant="inline"
                                            format="MM/dd/yyyy"
                                            margin="normal"
                                            id="date-picker-inline"
                                            label="Date picker inline"
                                            name="date"
                                            value={date}
                                            onChange={(date) => setDate(date)}
                                            KeyboardButtonProps={{
                                                "aria-label": "change date",
                                            }}
                                            required
                                        />
                                    </MuiPickersUtilsProvider>
                                    <TextField
                                        autoComplete="off"
                                        className="input"
                                        id="standard-basic"
                                        label="Reason for the update"
                                        name="reason"
                                        value={values.reason}
                                        onChange={handleInputChange}
                                    />
                                    <span className="errorMsg">
                                        {errors.reason}
                                    </span>
                                    <ContainedButton
                                        type="submit"
                                        className="add-plan-btn"
                                        variant="contained"
                                        size="large"
                                        color="primary"
                                        text="Add"
                                    />
                                    <ContainedButton
                                        className="add-plan-btn"
                                        variant="contained"
                                        size="large"
                                        color="secondary"
                                        text="Reset"
                                        onClick={resetForm}
                                    />
                                </Grid>
                            </form>
                        </center>
                    </DialogContent>
                    <DialogActions>
                        <ContainedButton
                            className="add-plan-btn"
                            onClick={handleCloseAdd}
                            color="secondary"
                            text="Cancel"
                        />
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
}

export default CurrentPlan;
