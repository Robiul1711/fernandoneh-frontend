import React from 'react';
import { useForm } from 'react-hook-form';
import { Lock } from 'lucide-react';

const SecuritySettings = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Security Data:', data);
  };

  const newPassword = watch("newPassword");

  return (
    <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 mb-6">
      <div className="flex items-center gap-2 mb-6 text-white">
        <Lock size={18} />
        <h3 className="text-lg font-semibold">Change Password</h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <label className="text-gray-400 text-sm font-medium">Current password</label>
          <input
            type="password"
            {...register('currentPassword', { required: 'Current password is required' })}
            className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/20 transition-colors"
            placeholder="********"
          />
          {errors.currentPassword && <p className="text-red-500 text-xs">{errors.currentPassword.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-gray-400 text-sm font-medium">New Password</label>
            <input
              type="password"
              {...register('newPassword', { 
                required: 'New password is required',
                minLength: { value: 8, message: 'Password must be at least 8 characters' }
              })}
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/20 transition-colors"
              placeholder="jessica.l@example.com"
            />
            {errors.newPassword && <p className="text-red-500 text-xs">{errors.newPassword.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-gray-400 text-sm font-medium">Confirm password</label>
            <input
              type="password"
              {...register('confirmPassword', { 
                required: 'Please confirm your password',
                validate: value => value === newPassword || "Passwords do not match"
              })}
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/20 transition-colors"
              placeholder="jessica.l@example.com"
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}
          </div>
        </div>

        <button 
          type="submit"
          className="w-full bg-[#333333] hover:bg-[#444444] text-white font-semibold py-3 rounded-xl transition-all duration-300"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default SecuritySettings;
