import Header from "./components/Header/Header.jsx";
import UserInput from "./components/UserInput/UserInput.jsx";
import Result from "./components/Result/Result.jsx";
import {useState} from "react";

const initialInvestmentData = {
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10

}

function App() {
    /**
     *     const [initialInvestment, setInitialInvestment] = useState(10000)
     *     const [annualInvestment, setAnnualInvestment] = useState(1200)
     *     const [expectedReturn, setExpectedReturn] = useState(6)
     *     const [duration, setDuration] = useState(10)
     */

    const [investmentData, setInvestmentData] = useState(initialInvestmentData)

    const isInputValid = investmentData.duration >= 1

    /**
     *  const handleInitialInvestmentChange = (event) => {
     *         setInitialInvestment(event.target.value)
     *     }
     *
     *     const handleAnnualInvestmentChange = (event) => {
     *         setAnnualInvestment(event.target.value)
     *     }
     *
     *     const handleExpectedReturnChange = (event) => {
     *         setExpectedReturn(event.target.value)
     *     }
     *
     *     const handleDurationChange = (event) => {
     *         setDuration(event.target.value)
     *     }
     */

    const handleInvestmentDataChange = (event) => {
        const {name, value} = event.target
        setInvestmentData((prevInvestmentData) => {
            return {
                ...prevInvestmentData,
                // + added to convert string to number
                [name]: +value
            }
        })
    }

    return (
        <>
            <Header/>
            <UserInput
                investmentData={investmentData}
                handleInvestmentDataChange={handleInvestmentDataChange}
            />
            {!isInputValid && <p className="center">Please enter a duration greater than zero</p>}
            {isInputValid && <Result investmentData={investmentData}/>}
        </>
    )
}

export default App
