import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Camera } from "lucide-react";
import { useSelector } from "react-redux";
import useMutationClient from "@/hooks/useMutationClient";
import { toast } from "sonner";
import { useUserProfile } from "@/hooks/fetchUserProfile";
const ProfileSettings = () => {
  const { user } = useSelector((state) => state.ui);
  console.log(user);
  const fileInputRef = useRef(null);

  // 1. Text Fields Form Setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 2. Mutation Hook for Text Details
  const { mutate: updateProfileDetails, isPending: isUpdatingDetails } =
    useMutationClient({
      url: "/profile/update",
      invalidateKeys: [["userProfile"]],

      successMessage: "Profile details updated successfully!",
      isPrivate: true,
   
    });

  // 3. Mutation Hook for Profile Image Upload
  const { mutate: updateProfileImage, isPending: isUploadingImage } =
    useMutationClient({
      url: "/profile/update-image",
      invalidateKeys: [["userProfile"]],
      
      successMessage: "Profile photo updated successfully!",
      isPrivate: true,
    });

  // Handles text form submission
  const onSubmit = (data) => {
    const payload = {
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      address: data.address,
      image: user?.image,
    };

    updateProfileDetails(
      { data: payload },
      {
        onSuccess: (res) => {
          // Handle your Redux logic / local state refresh here if necessary
        },
        onError: (err) => {
          console.error("Profile update failed:", err);
        },
      },
    );
  };

  // Handles dynamic file selection and triggers the /profile/update-image endpoint
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Must map to multipart form-data for backend file recognition
    const formData = new FormData();
    formData.append("image", file); // 'image' matches your second Postman screenshot key

    updateProfileImage(
      { data: formData },
      {
        onSuccess: (res) => {
          // Update user avatar context/redux if returned from server
        },
        onError: (err) => {
          console.error("Image upload failed:", err);
        },
      },
    );
  };

  return (
    <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 mb-6">
      {/* Profile Photo Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h3 className="text-white text-lg font-semibold mb-1">
            Profile Photo
          </h3>
          <p className="text-gray-400 text-sm">
            Update your profile picture to personalize your account
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white/10 bg-[#1A1A1A] flex items-center justify-center">
            <img
              src={user?.image || "https://via.placeholder.com/150"}
              alt="Profile"
              className={`w-full h-full object-cover ${isUploadingImage ? "opacity-40" : ""}`}
            />
            {isUploadingImage && (
              <span className="absolute text-xs text-white font-medium animate-pulse">
                Uploading...
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            {/* Hidden native input element */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
            <button
              type="button"
              disabled={isUploadingImage}
              onClick={() => fileInputRef.current?.click()}
              className="bg-[#1A1A1A] flex items-center justify-center gap-2 text-white border border-white/10 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors disabled:opacity-50"
            >
              {isUploadingImage ? (
                <>
                  <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Updating...
                </>
              ) : (
                "Upload New Photo"
              )}
            </button>
            <p className="text-gray-500 text-xs text-center">
              JPG, GIF or PNG. Max size of 2MB.
            </p>
          </div>
        </div>
      </div>

      {/* Profile Details Form Section */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="mb-6">
          <h4 className="text-white text-md font-medium mb-4">
            Profile Details
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-gray-400 text-sm font-medium">
                Full name
              </label>
              <input
                value={user?.name}
                {...register("fullName", { required: "Full name is required" })}
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/20 transition-colors"
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-gray-400 text-sm font-medium">Email</label>
              <input
                value={user?.email}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/20 transition-colors"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>

            {/* Phone (Extra Field Added) */}
            <div className="space-y-2">
              <label className="text-gray-400 text-sm font-medium">Phone</label>
              <input
                value={user?.phone}
                {...register("phone", { required: "Phone number is required" })}
                type="tel"
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/20 transition-colors"
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs">{errors.phone.message}</p>
              )}
            </div>

            {/* Address (Extra Field Added) */}
            <div className="space-y-2">
              <label className="text-gray-400 text-sm font-medium">
                Address
              </label>
              <input
                value={user?.address}
                {...register("address", { required: "Address is required" })}
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/20 transition-colors"
                placeholder="Enter your address"
              />
              {errors.address && (
                <p className="text-red-500 text-xs">{errors.address.message}</p>
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isUpdatingDetails}
          className="w-full bg-[#333333] flex items-center justify-center gap-2 hover:bg-[#444444] text-white font-semibold py-3 rounded-xl transition-all duration-300 disabled:opacity-50"
        >
          {isUpdatingDetails ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin">
                {" "}
              </div>
              <p>Saving...</p>
            </>
          ) : (
            "Save Changes"
          )}
        </button>
      </form>
    </div>
  );
};

export default ProfileSettings;
