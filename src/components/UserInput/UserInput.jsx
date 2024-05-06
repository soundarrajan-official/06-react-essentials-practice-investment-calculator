const UserInput = ({investmentData, handleInvestmentDataChange}) => {

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
