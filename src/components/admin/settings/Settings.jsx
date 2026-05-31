import React from 'react';
import ProfileSettings from './ProfileSettings';
import SecuritySettings from './SecuritySettings';
import NotificationSettings from './NotificationSettings';

const Settings = () => {
  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6">
      <div className="mb-8">
        <h1 className="text-xl sm:text-3xl font-bold text-white mb-2">Account Settings</h1>
        <p className="text-gray-400 text-sm sm:text-base">Manage your account preferences and security settings.</p>
      </div>
      
      <ProfileSettings />
      <SecuritySettings />
      <NotificationSettings />  
    </div>
  );
};

export default Settings;
