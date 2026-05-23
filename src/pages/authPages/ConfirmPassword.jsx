import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import useMutationClient from '@/hooks/useMutationClient'

const ConfirmPassword = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: '' }
  })

  const { mutate, isPending } = useMutationClient({
    url: '/forgot-password',
    successMessage: 'OTP sent! Please check your email.',
  })

  const onSubmit = (data) => {
    mutate(
      { data: { email: data.email } },
      {
        onSuccess: () => {
          // Store email & mark this as the forgot-password OTP flow
          localStorage.setItem('fp_email', data.email)
          localStorage.setItem('otp_flow', 'forgot_password')
          navigate('/otp')
        },
      }
    )
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
      <div className="text-center mb-6">
        <h2 className="text-white text-3xl font-semibold mb-4">Reset your password</h2>
        <p className="text-[#A1A1A1] text-sm max-w-xs mx-auto leading-relaxed">
          Enter your email address and we'll send you an OTP to reset your password.
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
                message: 'Invalid email address'
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
          disabled={isPending}
          className="w-full py-3 px-4 rounded-xl font-bold text-[#0D0D0D] bg-gradient-to-r from-[#E8AC43] to-[#AF7523] hover:opacity-90 transition-all text-lg shadow-[0_4px_20px_rgba(232,172,67,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? 'Sending OTP...' : 'Continue'}
        </button>

        {/* Back to Login */}
        <p className="text-center text-[#A1A1A1] text-sm">
          Remember your password?{' '}
          <Link to="/login" className="text-[#4ADE80] font-medium hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </div>
  )
}

export default ConfirmPassword