import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, CheckCircle2 } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'
import Logo from '../../assets/images/logo.png'
import useMutationClient from '@/hooks/useMutationClient'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '', // Added phone state
      password: '',
      confirmPassword: '',
      agreeTerms: true,
    }
  })

  const { mutate, isPending } = useMutationClient({
    url: '/register',
    successMessage: 'Registration successful! Please check your email for OTP.',
  })

  const onSubmit = (data) => {
    // Mapping payload explicitly to match your Postman screenshot keys
    const payload = {
      name: data.fullName,
      email: data.email,
      phone: data.phone, // Added phone payload
      password: data.password,
      password_confirmation: data.confirmPassword,
      terms_accepted: data.agreeTerms ? '1' : '0', // API expects '1' for true
    }

    mutate({ data: payload }, {
      onSuccess: () => {
        localStorage.setItem('otp_email', data.email)
        navigate('/otp')
      },
    })
  }

  const password = watch('password', '')
  const isPasswordStrong = password.length >= 8

  return (
    <div className="w-full flex flex-col items-center">
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-6 text-center">
        <img
          src={Logo}
          alt="AI Lottery App Logo"
          className="w-24 h-auto mb-2"
        />
      </div>

      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-white text-3xl font-semibold mb-2">Welcome to AI LOTTERY</h2>
        <p className="text-[#A1A1A1] text-sm">Your premium AI-powered lottery intelligence platform</p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-white text-sm font-medium block">Full Name</label>
          <input
            {...register('fullName', { required: 'Full name is required' })}
            type="text"
            placeholder="Enter your full name"
            className="w-full bg-[#1A1A1A] border-none text-white px-4 py-3 rounded-lg focus:ring-1 focus:ring-[#E8AC43] outline-none placeholder:text-[#666666]"
          />
          {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
        </div>

        {/* Email */}
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

        {/* Phone Field (Newly Added based on screenshot) */}
        <div className="space-y-2">
          <label className="text-white text-sm font-medium block">Phone</label>
          <input
            {...register('phone', { required: 'Phone number is required' })}
            type="tel"
            placeholder="Enter your phone number"
            className="w-full bg-[#1A1A1A] border-none text-white px-4 py-3 rounded-lg focus:ring-1 focus:ring-[#E8AC43] outline-none placeholder:text-[#666666]"
          />
          {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label className="text-white text-sm font-medium block">Password</label>
          <div className="relative">
            <input
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 8, message: 'Must be at least 8 characters' }
              })}
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className="w-full bg-[#1A1A1A] border-none text-white px-4 py-3 rounded-lg focus:ring-1 focus:ring-[#E8AC43] outline-none placeholder:text-[#666666] pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#666666] hover:text-white"
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>
          <div className="flex justify-between items-center px-1">
            <p className="text-[#A1A1A1] text-xs">Must be at least 8 characters</p>
            {isPasswordStrong && (
              <div className="flex items-center gap-1 text-[#4CAF50]">
                <CheckCircle2 size={14} />
                <span className="text-xs font-medium">Strong</span>
              </div>
            )}
          </div>
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <label className="text-white text-sm font-medium block">Confirm Password</label>
          <div className="relative">
            <input
              {...register('confirmPassword', {
                required: 'Please confirm your password',
                validate: (val) => {
                  if (watch('password') !== val) {
                    return 'Passwords do not match'
                  }
                }
              })}
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm your password"
              className="w-full bg-[#1A1A1A] border-none text-white px-4 py-3 rounded-lg focus:ring-1 focus:ring-[#E8AC43] outline-none placeholder:text-[#666666] pr-12"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#666666] hover:text-white"
            >
              {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>
          {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}
          <div className="flex justify-between items-center px-1">
            <p className="text-[#A1A1A1] text-xs">Must be at least 8 characters</p>
            {watch('confirmPassword') && watch('confirmPassword') === watch('password') && watch('confirmPassword').length >= 8 && (
              <div className="flex items-center gap-1 text-[#4CAF50]">
                <CheckCircle2 size={14} />
                <span className="text-xs font-medium">Strong</span>
              </div>
            )}
          </div>
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-center gap-3 py-2">
          <div className="relative flex items-center">
            <input
              {...register('agreeTerms')}
              type="checkbox"
              className="w-5 h-5 rounded-full appearance-none border border-[#4CAF50] bg-transparent checked:bg-[#4CAF50] cursor-pointer"
              id="terms"
            />
            <CheckCircle2
              size={12}
              className={`absolute left-1 top-1 text-[#0D0D0D] pointer-events-none transition-opacity ${watch('agreeTerms') ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
          <label htmlFor="terms" className="text-white text-sm cursor-pointer select-none">
            I have read, and agree with <span className="text-[#E8AC43] font-medium">Terms of services</span> &amp; <span className="text-[#E8AC43] font-medium">Privacy policy</span>
          </label>
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full py-3 px-4 rounded-xl font-bold text-[#0D0D0D] bg-gradient-to-r from-[#E8AC43] to-[#AF7523] hover:opacity-90 transition-all text-lg shadow-[0_4px_20px_rgba(232,172,67,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? 'Signing Up...' : 'Sign Up'}
        </button>

        {/* Divider */}
        <div className="relative flex items-center py-4">
          <div className="flex-grow border-t border-[#333333]"></div>
          <span className="flex-shrink mx-4 text-[#A1A1A1] text-xs uppercase tracking-wider">Or register with</span>
          <div className="flex-grow border-t border-[#333333]"></div>
        </div>

        {/* Google Button */}
        <button
          type="button"
          className="w-full py-3 px-4 rounded-xl font-medium text-white bg-[#1A1A1A] border border-[#333333] hover:bg-[#262626] transition-all flex items-center justify-center gap-2"
        >
          <FcGoogle size={22} />
          <span>Continue with Google</span>
        </button>

        {/* Footer */}
        <p className="text-center text-[#A1A1A1] text-sm pt-4">
          Already have an account? <Link to="/login" className="text-[#4ADE80] font-medium hover:underline">Log in</Link>
        </p>
      </form>
    </div>
  )
}

export default Register