import {useState} from "react";

const UserInput = () => {
    const [initialInvestment, setInitialInvestment] = useState(10000)
    const [annualInvestment, setAnnualInvestment] = useState(1200)
    const [expectedReturn, setExpectedReturn] = useState(6)
    const [duration, setDuration] = useState(10)

    const handleInitialInvestmentChange = (event) => {
        setInitialInvestment(event.target.value)
    }

    const handleAnnualInvestmentChange = (event) => {
        setAnnualInvestment(event.target.value)
    }

    const handleExpectedReturnChange = (event) => {
        setExpectedReturn(event.target.value)
    }

    const handleDurationChange = (event) => {
        setDuration(event.target.value)
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        type="number"
                        required
                        onChange={handleInitialInvestmentChange}
                        value={initialInvestment}
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        type="number"
                        required
                        onChange={handleAnnualInvestmentChange}
                        value={annualInvestment}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input
                        type="number"
                        required
                        onChange={handleExpectedReturnChange}
                        value={expectedReturn}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        type="number"
                        required
                        onChange={handleDurationChange}
                        value={duration}
                    />
                </p>
            </div>
        </section>
    )
}

export default UserInput
