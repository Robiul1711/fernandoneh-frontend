import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

const ConfirmPassword = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
    }
  })

  const onSubmit = (data) => {
    console.log('Reset Data:', data)
    navigate('/otp') // Usually goes to OTP after email
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
        <h2 className="text-white text-3xl font-semibold mb-4">Reset your password</h2>
        <p className="text-[#A1A1A1] text-sm max-w-xs mx-auto leading-relaxed">
          Enter the verification code sent to your number.
        </p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-8">
        {/* Email Field */}
        <div className="space-y-2">
          <label className="text-white text-sm font-medium block">Email</label>
          <input
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
            type="email"
            placeholder="Enter your email"
            className="w-full bg-[#1A1A1A] border-none text-white px-4 py-3 rounded-lg focus:ring-1 focus:ring-[#E8AC43] outline-none placeholder:text-[#666666]"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>

        {/* Continue Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 rounded-xl font-bold text-[#0D0D0D] bg-gradient-to-r from-[#E8AC43] to-[#AF7523] hover:opacity-90 transition-all text-lg shadow-[0_4px_20px_rgba(232,172,67,0.3)]"
        >
          Continue
        </button>
      </form>

      {/* Back to Login link could be added here if needed */}
    </div>
  )
}

export default ConfirmPassword