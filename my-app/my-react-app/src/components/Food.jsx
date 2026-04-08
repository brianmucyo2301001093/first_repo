function Food() {

    const food1 = "Pizza";
    const food2 = "Burger";
    const food3 = "Pasta";
    return (
        <div>
            <h2>Food Component</h2>
            <p>{food1}</p>
            <p>{food2}</p>
            <p>{food3.toUpperCase() }</p>
        </div>
    );
}
export default Food;