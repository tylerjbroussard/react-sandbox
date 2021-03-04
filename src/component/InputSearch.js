import { useEffect, useState } from "react"


function InputSearch(){

    const [stateVar, stateProcess] = useState();

    const getThatData = () => {
        fetch("https://spreadsheets.google.com/feeds/cells/1DUWqE3jZHCC0yjJJaFb_00F7wMEXrjFo0hc2jE-8Ax4/1/public/full?alt=json").then(response => response.json())
        .then(data => stateProcess(data));
        console.log([stateVar]);
    }

    useEffect(() => {
        getThatData();
    }, []);

    return(
        <div>
            <div>
                <button onClick={getThatData}>Select</button>
            </div>
        {/*<form action="" method="get" class="form-example">
                <div class="form-example">
                    <label for="name">Enter your name: </label>
                    <input type="text" name="name" id="name" required />
                </div>
                <div class="form-example">
                    <label for="email">Enter your email: </label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div class="form-example">
                    <input type="submit" value="Subscribe!" />
                </div>
            </form> */}
        </div>     
    );
}

export default InputSearch;



