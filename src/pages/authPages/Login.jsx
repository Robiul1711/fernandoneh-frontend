import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, CheckCircle2 } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import Logo from '../../assets/images/logo.png'
import useMutationClient from '@/hooks/useMutationClient'
import { setAuth } from '@/redux/slices/authSlice'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: true,
    }
  })

  const { mutate, isPending } = useMutationClient({
    url: '/login',
    successMessage: 'Login successful!',
  })

  const onSubmit = (data) => {
    mutate(
      { data: { email: data.email, password: data.password } },
      {
        onSuccess: (res) => {
          const resData = res?.data
          dispatch(setAuth({
            token: resData?.access_token,
            user: resData?.data,
          }))
          navigate('/dashboard')
        },
      }
    )
  }

  const password = watch('password', '')
  const isPasswordStrong = password.length >= 8

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
        <h2 className="text-white text-3xl font-semibold mb-2">Welcome Back</h2>
        <p className="text-[#A1A1A1] text-sm">Login your account</p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
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

        {/* Login Button */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full py-3 px-4 rounded-xl font-bold text-[#0D0D0D] bg-gradient-to-r from-[#E8AC43] to-[#AF7523] hover:opacity-90 transition-all text-lg shadow-[0_4px_20px_rgba(232,172,67,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? 'Logging in...' : 'Login'}
        </button>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center">
              <input
                {...register('rememberMe')}
                type="checkbox"
                className="w-5 h-5 rounded-full appearance-none border border-[#4CAF50] bg-transparent checked:bg-[#4CAF50] cursor-pointer"
                id="remember"
              />
              <CheckCircle2
                size={12}
                className={`absolute left-1 top-1 text-[#0D0D0D] pointer-events-none transition-opacity ${watch('rememberMe') ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
            <label htmlFor="remember" className="text-white text-sm cursor-pointer select-none">
              Remember me
            </label>
          </div>
          <Link to="/confirm-password" title="Forgot Password" className="text-[#008080] text-sm hover:underline">
            Forgot your password?
          </Link>
        </div>

        {/* Divider */}
        <div className="relative flex items-center py-4">
          <div className="flex-grow border-t border-[#333333]"></div>
          <span className="flex-shrink mx-4 text-[#A1A1A1] text-xs uppercase tracking-wider">Or login with</span>
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
          Don't have an account? <Link to="/" className="text-[#4ADE80] font-medium hover:underline">Register</Link>
        </p>
      </form>
    </div>
  )
}

export default Login