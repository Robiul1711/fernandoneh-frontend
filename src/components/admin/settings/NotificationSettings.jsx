import React from 'react';
import { useForm } from 'react-hook-form';

const NotificationSettings = () => {
  const { register, watch, setValue } = useForm({
    defaultValues: {
      allowAlerts: true,
      sounds: true
    }
  });

  const allowAlerts = watch("allowAlerts");
  const sounds = watch("sounds");

  return (
    <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6">
      <h3 className="text-white text-lg font-semibold mb-6">Notification Settings</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-black border border-white/5 rounded-xl">
          <span className="text-gray-300 text-sm">Allow Alerts</span>
          <button 
            type="button"
            onClick={() => setValue('allowAlerts', !allowAlerts)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none ${allowAlerts ? 'bg-[#FFD700]' : 'bg-[#1A1A1A]'}`}
          >
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${allowAlerts ? 'translate-x-6' : 'translate-x-1'}`} />
          </button>
        </div>

        <div className="flex items-center justify-between p-4 bg-black border border-white/5 rounded-xl">
          <span className="text-gray-300 text-sm">Sounds</span>
          <button 
            type="button"
            onClick={() => setValue('sounds', !sounds)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none ${sounds ? 'bg-[#FFD700]' : 'bg-[#1A1A1A]'}`}
          >
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${sounds ? 'translate-x-6' : 'translate-x-1'}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
