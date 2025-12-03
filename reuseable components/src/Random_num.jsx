function Random () {
    let newNum = Math.random() * 100;
    let rollNum = Math.random() * 100;
    return <p>
        roll Number {Math.round(rollNum)} got  allocted to  {Math.floor(newNum)} room .
    </p>
}
export default Random;