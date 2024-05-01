import investmentCalculatorLogo from '../../assets/investment-calculator-logo.png';

const Header = () => {
    return (
        <header id="header">
            <img src={investmentCalculatorLogo + ""} alt="Logo showing money bag"/>
            <h1>Investment Calculator</h1>
        </header>
    );
}

export default Header;
