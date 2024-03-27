import { useState } from "react"
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail"
import StepOtp from "../Steps/StepOtp/StepOtp"

const steps = {
    1: StepPhoneEmail,
    2: StepOtp,

}

const Login = () => {
    const [step, setStep] = useState(1)
    const Step = steps[step]
    const onNext = () => {
        setStep((s)=>s+1)
    }
    return (
        <Step onNext={onNext}/>
    )
}

export default Login