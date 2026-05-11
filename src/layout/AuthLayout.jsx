import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-[#0D0D0D] flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout   