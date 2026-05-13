import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, CheckCircle2 } from 'lucide-react'
import Logo from '../../assets/images/logo.png'

const NewPassword = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    }
  })

  const password = watch('password', '')
  const isPasswordStrong = password.length >= 8
  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log('New Password Data:', data)

    navigate('/dashboard')
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
        <h2 className="text-white text-3xl font-semibold mb-2">Reset your password</h2>
        <p className="text-[#A1A1A1] text-sm">Enter a new password to continue using your account</p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
        {/* New Password */}
        <div className="space-y-2">
          <label className="text-white text-sm font-medium block">New Password</label>
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
          <label className="text-white text-sm font-medium block">Conform Password</label>
          <div className="relative">
            <input
              {...register('confirmPassword', { 
                required: 'Please confirm your password',
                validate: (val) => {
                  if (watch('password') !== val) {
                    return "Passwords do not match";
                  }
                }
              })}
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Enter your password"
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
          <div className="flex justify-between items-center px-1">
            <p className="text-[#A1A1A1] text-xs">Must be at least 8 characters</p>
            {watch('confirmPassword') && watch('confirmPassword') === watch('password') && watch('confirmPassword').length >= 8 && (
              <div className="flex items-center gap-1 text-[#4CAF50]">
                <CheckCircle2 size={14} />
                <span className="text-xs font-medium">Strong</span>
              </div>
            )}
          </div>
          {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}
        </div>

        {/* Continue Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 rounded-xl font-bold text-[#0D0D0D] bg-gradient-to-r from-[#E8AC43] to-[#AF7523] hover:opacity-90 transition-all text-lg shadow-[0_4px_20px_rgba(232,172,67,0.3)] mt-4"
        >
          Continue
        </button>
      </form>
    </div>
  )
}

export default NewPassword