import {calculateInvestmentResults} from "../../util/investment.js";

const Result = ({investmentData}) => {
    console.log(investmentData)
    let investmentResults = calculateInvestmentResults(investmentData);
    console.log(investmentResults)
    return (
        <p>Results...</p>
    );
}

export default Result;
