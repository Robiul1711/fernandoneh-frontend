import React, { useState } from 'react'
import OtpInput from 'otp-input-react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Logo from '../../assets/images/logo.png'
import useMutationClient from '@/hooks/useMutationClient'
import { setAuth } from '@/redux/slices/authSlice'

const OTP = () => {
  const [otp, setOtp] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Detect which flow we're in
  const flow = localStorage.getItem('otp_flow') || 'signup'
  const isForgotPassword = flow === 'forgot_password'

  // Pick the right email key based on flow
  const email = isForgotPassword
    ? localStorage.getItem('fp_email') || ''
    : localStorage.getItem('otp_email') || ''

  // Mask email for display
  const maskedEmail = email
    ? email.replace(/^(.)(.+)(@.+)$/, (_, first, middle, domain) => `${first}${'*'.repeat(Math.min(middle.length, 6))}${domain}`)
    : ''

  // --- Signup: verify OTP ---
  const { mutate: verifySignupOtp, isPending: isVerifyingSignup } = useMutationClient({
    url: '/register/verify-otp',
    successMessage: 'Account verified successfully!',
  })

  // --- Forgot password: verify OTP ---
  const { mutate: verifyForgotOtp, isPending: isVerifyingForgot } = useMutationClient({
    url: '/forgot-password/verify-otp',
    successMessage: 'OTP verified! Set your new password.',
  })

  // --- Resend OTP ---
  const { mutate: resendOtp, isPending: isResending } = useMutationClient({
    url: isForgotPassword ? '/forgot-password' : '/register/resend-otp',
    successMessage: 'OTP resent to your email.',
  })

  const isVerifying = isVerifyingSignup || isVerifyingForgot

  const handleContinue = () => {
    if (isForgotPassword) {
      // Forgot password flow
      verifyForgotOtp(
        { data: { email, otp } },
        {
          onSuccess: () => {
            // Save otp so NewPassword can include it in /reset-password payload
            localStorage.setItem('fp_otp', otp)
            localStorage.removeItem('otp_flow')
            navigate('/new-password')
          },
        }
      )
    } else {
      // Signup flow
      verifySignupOtp(
        { data: { email, otp } },
        {
          onSuccess: (res) => {
            const resData = res?.data
            dispatch(setAuth({
              token: resData?.access_token,
              user: resData?.data,
            }))
            localStorage.removeItem('otp_email')
            navigate('/dashboard')
          },
        }
      )
    }
  }

  const handleResend = () => {
    if (!email) return
    if (isForgotPassword) {
      resendOtp({ data: { email } })
    } else {
      resendOtp({ data: { email, type: 'signup' } })
    }
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
        <h2 className="text-white text-3xl font-semibold mb-4">
          {isForgotPassword ? 'Verify OTP' : 'Verify OTP'}
        </h2>
        <p className="text-[#A1A1A1] text-sm mb-4 leading-relaxed">
          Enter the OTP code that we sent to your email{' '}
          <span className="text-[#4ADE80]">{maskedEmail}</span>,<br />
          Be careful not to share the code with anyone
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
          inputClassName="!w-10 md:!w-12 lg:!w-14 !h-10 md:!h-12 lg:!h-14 !text-2xl !bg-[#4B4B4B] !text-white !border-none !rounded-[8px] md:!rounded-xl !mx-2 focus:!ring-2 focus:!ring-[#E8AC43] outline-none"
          placeholder="------"
        />
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        disabled={otp.length < 6 || isVerifying}
        className="w-full py-3 px-4 rounded-xl font-bold text-[#0D0D0D] bg-gradient-to-r from-[#E8AC43] to-[#AF7523] hover:opacity-90 transition-all text-lg shadow-[0_4px_20px_rgba(232,172,67,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isVerifying ? 'Verifying...' : 'Continue'}
      </button>

      {/* Footer */}
      <p className="text-center text-[#A1A1A1] text-sm mt-8">
        Didn't receive the code?{' '}
        <button
          onClick={handleResend}
          disabled={isResending}
          className="text-[#4ADE80] font-medium hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isResending ? 'Resending...' : 'Resend'}
        </button>
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