import {calculateInvestmentResults, formatter} from "../../util/investment.js";

const Result = ({investmentData}) => {
    let investmentResults = calculateInvestmentResults(investmentData);
    const initialInvestment =
        investmentResults[0].valueEndOfYear -
        investmentResults[0].interest -
        investmentResults[0].annualInvestment;

    return (
        <table id="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {investmentResults.map((yearData) => {
                const totalInterest =
                    yearData.valueEndOfYear -
                    yearData.annualInvestment * yearData.year - initialInvestment;
                const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

                return (
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

export default Result;
