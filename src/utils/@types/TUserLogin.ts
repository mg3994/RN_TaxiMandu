
/**
 * Represents a user login object.
 * @typedef {Object} TUserLogin
 * @property {string} email - The email of the user.
 * @property {string} password - The password of the user.
 * @property {string} device_name - The device name used for login.
 */

type TUserLogin = {
    email: TEmail;
    password: TPassword;
    device_name: TDeviceName;
};