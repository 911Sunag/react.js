function Dynamic () {
    let myName = 'Sunag Arigala';

    let myAge = () => {
        return 24;
    }
    return <p>
        helloo {myName} and i am {myAge()} years old.
    </p>
}
export default Dynamic;