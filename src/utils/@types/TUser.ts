/**
 * Represents a user registration object.
 * @typedef {Object} TUserRegister
 * @property {string} name - The name of the user.
 * @property {string} email - The email of the user.
 * @property {string} password - The password of the user.
 * @property {string} password_confirmation - The password confirmation of the user.
 * @property {string} device_name - The device name used for registration.
 */

/**
 * Represents a user login object.
 * @typedef {Object} TUserLogin
 * @property {string} email - The email of the user.
 * @property {string} password - The password of the user.
 * @property {string} device_name - The device name used for login.
 */

/**
 * Represents a user registration object extending the login object.
 * @typedef {TUserLogin & TUserRegister} TUserRegister
 */

/**
 * Example usage:
 * const register: TUserRegister = {
 *     name: "username",
 *     email: "email",
 *     password: "password",
 *     password_confirmation: "password",
 *     device_name: "device"
 * };
 */
declare module '@user'{
type TName = string;
type TEmail = string | null;
type TPhone = string | null;
type TPassword = string
type TPasswordConfirmation = string
type TDeviceName = string | null



type TUser = {
    name:TName;
    email:TEmail;
    // phone?:string;
};
}