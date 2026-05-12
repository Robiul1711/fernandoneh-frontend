import React from 'react';
import { useForm } from 'react-hook-form';
import { Camera } from 'lucide-react';

const ProfileSettings = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      fullName: 'Kabirnishat',
      email: 'kabirafa@gmail.com'
    }
  });

  const onSubmit = (data) => {
    console.log('Profile Data:', data);
  };

  return (
    <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h3 className="text-white text-lg font-semibold mb-1">Profile Photo</h3>
          <p className="text-gray-400 text-sm">Update your profile picture to personalize your account</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white/10">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <button className="bg-[#1A1A1A] text-white border border-white/10 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors">
              Upload New Photo
            </button>
            <p className="text-gray-500 text-xs text-center">JPG, GIF or PNG. Max size of 2MB.</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="mb-6">
          <h4 className="text-white text-md font-medium mb-4">Profile Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-gray-400 text-sm font-medium">Full name</label>
            <input
              {...register('fullName', { required: 'Full name is required' })}
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/20 transition-colors"
              placeholder="Enter your full name"
            />
            {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-gray-400 text-sm font-medium">Email</label>
            <input
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address"
                }
              })}
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/20 transition-colors"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>
        </div>

        </div>
        <button 
          type="submit"
          className="w-full bg-[#333333] hover:bg-[#444444] text-white font-semibold py-3 rounded-xl transition-all duration-300"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileSettings;
