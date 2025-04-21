export const ROUTER_PATH = {
    auth: {
        login: '/auth/login',
        forgotPassword: '/auth/forgot-password',
        resetPassword: '/auth/reset-password',
        changePasswordSuccess: '/auth/change-password-success',
        otp: '/auth/otp'

    },
    superAdmin: {
        assetType: {
            path: '/super-admin/asset-type',
            basicDetails: '/super-admin/asset-type/basic-details'
        },
        dashboard: {
            path: '/super-admin/dashboard'
        },
        templateCenter: {
            path: '/super-admin/template-center'
        },
        master: {
            path: '/super-admin/master'
        }
    }
}