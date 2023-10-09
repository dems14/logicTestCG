export default function validateInput(values, setMessage) {
    let flag = null;
    for (let i = 0; i < values.length; i++) {
        if (values[i].trim() === '') {
            setMessage("one or more inputs are empty");
            flag = true;
            break;
        }
        if ((Number.isInteger(Number(values[i])) && Number(values[i]) > 0)) {
            flag = false;
        }
        else {
            setMessage("please fix the error in one or more inputs");
            flag = true;
            break;
        }
    }
    if (!flag && parseInt(values[2]) > parseInt(values[0]) && parseInt(values[2]) > parseInt(values[1])) {
        debugger;
        setMessage("the X or Y inputs should be higher than Z");
        return flag = true;
    }
    return flag;
};