import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Lock, Eye, EyeOff } from 'lucide-react';
import useMutationClient from '@/hooks/useMutationClient';

const SecuritySettings = () => {
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  
  // Visibility states for each password field
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { mutate, isPending } = useMutationClient({
    url: '/profile/change-password',
    successMessage: 'Password updated successfully!',
    isPrivate: true,
  });

  const onSubmit = (data) => {
    const payload = {
      current_password: data.currentPassword,
      new_password: data.newPassword,
      new_password_confirmation: data.confirmPassword,
    };

    mutate({ data: payload }, {
      onSuccess: () => {
        reset();
        setShowCurrentPassword(false);
        setShowNewPassword(false);
        setShowConfirmPassword(false);
      },
      onError: (err) => {
        console.error('Password change failed:', err);
      }
    });
  };

  const newPassword = watch("newPassword");

  return (
    <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 mb-6">
      <div className="flex items-center gap-2 mb-6 text-white">
        <Lock size={18} />
        <h3 className="text-lg font-semibold">Change Password</h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        {/* Current Password Field */}
        <div className="space-y-2">
          <label className="text-gray-400 text-sm font-medium">Current password</label>
          <div className="relative">
            <input
              type={showCurrentPassword ? 'text' : 'password'}
              {...register('currentPassword', { required: 'Current password is required' })}
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 pr-12 text-white focus:outline-none focus:border-white/20 transition-colors"
              placeholder="********"
            />
            <button
              type="button"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#666666] hover:text-white transition-colors"
            >
              {showCurrentPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>
          {errors.currentPassword && <p className="text-red-500 text-xs">{errors.currentPassword.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* New Password Field */}
          <div className="space-y-2">
            <label className="text-gray-400 text-sm font-medium">New Password</label>
            <div className="relative">
              <input
                type={showNewPassword ? 'text' : 'password'}
                {...register('newPassword', { 
                  required: 'New password is required',
                  minLength: { value: 8, message: 'Password must be at least 8 characters' }
                })}
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 pr-12 text-white focus:outline-none focus:border-white/20 transition-colors"
                placeholder="********"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#666666] hover:text-white transition-colors"
              >
                {showNewPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
            {errors.newPassword && <p className="text-red-500 text-xs">{errors.newPassword.message}</p>}
          </div>

          {/* Confirm Password Field */}
          <div className="space-y-2">
            <label className="text-gray-400 text-sm font-medium">Confirm password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                {...register('confirmPassword', { 
                  required: 'Please confirm your password',
                  validate: value => value === newPassword || "Passwords do not match"
                })}
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 pr-12 text-white focus:outline-none focus:border-white/20 transition-colors"
                placeholder="********"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#666666] hover:text-white transition-colors"
              >
                {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}
          </div>
          
        </div>

        {/* Submit Button */}
   {/* Submit Button */}
<button
  type="submit"
  disabled={isPending}
  className="w-full bg-[#333333] hover:bg-[#444444] text-white font-semibold py-3 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
>
  {isPending ? (
    <>
      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      Updating...
    </>
  ) : (
    "Update Password"
  )}
</button>
      </form>
    </div>
  );
};

export default SecuritySettings;