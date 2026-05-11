import React, { useState } from 'react'
import OtpInput from 'otp-input-react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

const OTP = () => {
  const [otp, setOtp] = useState('')

  const handleContinue = () => {
    console.log('OTP Entered:', otp)
  }

  return (
    <div className="w-full flex flex-col items-center">
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-4 text-center">
        <img
          src={Logo}
          alt="AI Lottery App Logo"
          className="w-24 h-auto mb-2"
        />
      </div>

      {/* Heading Section */}
      <div className="text-center mb-4">
        <h2 className="text-white text-3xl font-semibold mb-4">Verify OTP</h2>
        <p className="text-[#A1A1A1] text-sm mb-4 leading-relaxed">
          Enter the ETP code that we sent your email <span className="text-[#4ADE80]">m******y@gmail.com</span>,<br />
          Be careful not to share code with anyone
        </p>
        <p className="text-[#A1A1A1] text-xs leading-relaxed opacity-80 max-w-sm mx-auto">
          We've sent a 6-digit verification code to your email. Check your spam folder in case you didn't receive the code.
        </p>
      </div>

      {/* OTP Input Section */}
      <div className="mb-10 w-full flex justify-center">
        <OtpInput
          value={otp}
          onChange={setOtp}
          OTPLength={6}
          otpType="number"
          disabled={false}
          autoFocus
          className="otp-container"
          inputClassName="!w-14 !h-16 !text-2xl !bg-[#4B4B4B] !text-white !border-none !rounded-xl !mx-2 focus:!ring-2 focus:!ring-[#E8AC43] outline-none"
          placeholder="------"
        />
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        disabled={otp.length < 6}
        className="w-full py-3 px-4 rounded-xl font-bold text-[#0D0D0D] bg-gradient-to-r from-[#E8AC43] to-[#AF7523] hover:opacity-90 transition-all text-lg shadow-[0_4px_20px_rgba(232,172,67,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Continue
      </button>

      {/* Footer */}
      <p className="text-center text-[#A1A1A1] text-sm mt-8">
        Didn’t receive the code? <button className="text-[#4ADE80] font-medium hover:underline">Resend</button>
      </p>

      <style dangerouslySetInnerHTML={{ __html: `
        .otp-container {
          display: flex;
          justify-content: center;
          width: 100%;
        }
        .otp-container input::placeholder {
          color: #A1A1A1;
          opacity: 0.5;
        }
      `}} />
    </div>
  )
}

export default OTP