import React, { useState, useEffect } from "react";
import { ContainedButton } from "../../components/atomic";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import "./BygoneMain.css";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { UseFormSales } from "../../components/items/UseFormSales";
import {
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Dialog,
    DialogContent,
    DialogActions,
    Grid,
    TextField,
    InputAdornment,
} from "@material-ui/core";
import Axios from "axios";
import { Link } from "react-router-dom";
import ReactHTMLtabletoExcel from "react-html-table-to-excel";

function BygoneTable() {
    const [iniDate, setiniDate] = useState(new Date());

    const [openAdd, setOpenAdd] = useState(false);

    const handleClickOpenAdd = () => {
        setOpenAdd(true);
    };
    const handleCloseAdd = () => {
        setOpenAdd(false);
    };

    const [bygonePlanList, setbygonePlanList] = useState([]);

    const initialValues = {
        plan: "",
        iniDate: new Date(),
        advisor: "",
        budgett: "",
        expenses: "",
    };

    const validate = (fieldValues = values) => {
        console.log(fieldValues);
        let temp = { ...errors };
        let numbers = /^[0-9]+$/;
        if ("plan" in fieldValues) {
            temp.plan = fieldValues.plan ? "" : "This field is required.";
        }
        if ("advisor" in fieldValues) {
            temp.advisor = fieldValues.advisor ? "" : "This field is required.";
        }
        if ("budgett" in fieldValues) {
            temp.budgett = numbers.test(fieldValues.budgett)
                ? ""
                : "Please input numeric characters only";
        }
        if ("expenses" in fieldValues) {
            temp.expenses = numbers.test(fieldValues.expenses)
                ? ""
                : "Please input numeric characters only";
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

    const addBygonePlan = (e) => {
        e.preventDefault();
        if (validate()) {
            Axios.post("http://localhost:3001/bygone/addbygone", {
                plan: values.plan,
                advisor: values.advisor,
                iniDate: iniDate,
                expenses: values.expenses,
                budgett: values.budgett,
            }).then(() => {
                console.log("Success");
                alert("Bygone Plan Successfully Added");
            });
        }
    };

    const showBygonePlan = () => {
        Axios.get("http://localhost:3001/bygone/showbygone").then(
            (response) => {
                setbygonePlanList(response && response.data);
                console.log("showRecord", response.data);
            }
        );
    };

    useEffect(() => {
        showBygonePlan();
    }, []);

    const [filterFn, setfilterFn] = useState({
        fn: (items) => {
            return items;
        },
    });

    const handleSearch = (e) => {
        let target = e.target;
        setfilterFn({
            fn: (items) => {
                if (target.value === "") return items;
                else
                    return items.filter((x) =>
                        x.advisor.includes(target.value)
                    );
            },
        });
    };

    const recordsAfterSelecting = () => {
        return filterFn.fn(bygonePlanList);
    };

    return (
        <>
            <h2 className="plan-head">Bygone Business Plan</h2>
            <div className="col-11 bygone-main-div">
                <TextField
                    className="search-input"
                    label="Search Here"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                <AiIcons.AiOutlineSearch />
                            </InputAdornment>
                        ),
                    }}
                    onChange={handleSearch}
                />
                <br />
                <br />
                <ContainedButton
                    className="add-new-bygone"
                    variant="contained"
                    size="medium"
                    color="default"
                    onClick={handleClickOpenAdd}
                    startIcon={<IoIcons.IoMdAdd />}
                    text="Add New"
                />
                <br />
                <Link to="/bygone-edit">
                    <ContainedButton
                        className="add-new-bygone"
                        variant="contained"
                        size="medium"
                        color="primary"
                        onClick={handleClickOpenAdd}
                        text="Edit"
                    />
                </Link>
                <br />
                <ReactHTMLtabletoExcel
                    className="download-bygone"
                    table="bygone-table"
                    filename="Bygone Excel File"
                    sheet="Sheet"
                    buttonText="Download"
                />
                <br />
                <TableContainer>
                    <Table id="bygone-table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <b>Plan Name</b>
                                </TableCell>
                                <TableCell align="left">
                                    <b>Initialised Date</b>
                                </TableCell>
                                <TableCell align="left">
                                    <b>Advisor Name</b>
                                </TableCell>
                                <TableCell align="center">
                                    <b>Budget</b>
                                </TableCell>
                                <TableCell align="center">
                                    <b>Expenses</b>
                                </TableCell>
                                <TableCell align="center">
                                    <b>Profit</b>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {recordsAfterSelecting().map((val, key) => (
                                <TableRow>
                                    <TableCell>{val.plan}</TableCell>
                                    <TableCell>
                                        {val.iniDate}
                                        <br />
                                    </TableCell>
                                    <TableCell align="left">
                                        {val.advisor}
                                        <br />
                                    </TableCell>
                                    <TableCell align="center">
                                        {val.budgett}
                                        <br />
                                    </TableCell>
                                    <TableCell align="center">
                                        {val.expenses}
                                        <br />
                                    </TableCell>
                                    <TableCell align="center">
                                        {val.profit}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            <Dialog open={openAdd}>
                <DialogContent>
                    <center>
                        <h2>Add By-gone Plan</h2>
                        <form className="add-from-div" onSubmit={addBygonePlan}>
                            <Grid container>
                                <TextField
                                    autoComplete="off"
                                    className="input"
                                    id="standard-basic"
                                    label="Plan Name"
                                    name="plan"
                                    value={values.plan}
                                    onChange={handleInputChange}
                                />
                                <span className="errorMsg">{errors.plan}</span>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        className="date-picker"
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Date picker inline"
                                        name="date"
                                        value={iniDate}
                                        onChange={(iniDate) =>
                                            setiniDate(iniDate)
                                        }
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
                                    label="Advisor Name"
                                    name="advisor"
                                    value={values.advisor}
                                    onChange={handleInputChange}
                                />
                                <span className="errorMsg">
                                    {errors.advisor}
                                </span>
                                <TextField
                                    autoComplete="off"
                                    className="input"
                                    id="standard-basic"
                                    label="Budget"
                                    name="budgett"
                                    value={values.budgett}
                                    onChange={handleInputChange}
                                    required
                                />
                                <span className="errorMsg">
                                    {errors.budgett}
                                </span>
                                <TextField
                                    autoComplete="off"
                                    className="input"
                                    id="standard-basic"
                                    label="Expenses"
                                    name="expenses"
                                    value={values.expenses}
                                    onChange={handleInputChange}
                                    required
                                />
                                <span className="errorMsg">
                                    {errors.expenses}
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
        </>
    );
}

export default BygoneTable;
