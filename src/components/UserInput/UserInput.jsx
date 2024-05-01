import {useState} from "react";

const initialInvestmentData = {
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10

}

const UserInput = () => {
    /**
     *     const [initialInvestment, setInitialInvestment] = useState(10000)
     *     const [annualInvestment, setAnnualInvestment] = useState(1200)
     *     const [expectedReturn, setExpectedReturn] = useState(6)
     *     const [duration, setDuration] = useState(10)
     */

    const [investmentData, setInvestmentData] = useState(initialInvestmentData)

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
                [name]: value
            }
        })
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        type="number"
                        required
                        // onChange={handleInitialInvestmentChange}
                        // value={initialInvestment}
                        name="initialInvestment"
                        onChange={handleInvestmentDataChange}
                        value={investmentData.initialInvestment}
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        type="number"
                        required
                        // onChange={handleAnnualInvestmentChange}
                        // value={annualInvestment}
                        name="annualInvestment"
                        onChange={handleInvestmentDataChange}
                        value={investmentData.annualInvestment}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input
                        type="number"
                        required
                        // onChange={handleExpectedReturnChange}
                        // value={expectedReturn}
                        name="expectedReturn"
                        onChange={handleInvestmentDataChange}
                        value={investmentData.expectedReturn}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        type="number"
                        required
                        // onChange={handleDurationChange}
                        // value={duration}
                        name="duration"
                        onChange={handleInvestmentDataChange}
                        value={investmentData.duration}
                    />
                </p>
            </div>
        </section>
    )
}

export default UserInput
