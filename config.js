const JWT_USER_SECRET = process.env.JWT_USER_PASSWORD;
const JWT_ADMIN_SECRET = process.env.JWT_ADMIN_PASSWORD;

module.exports = {
    JWT_USER_PASSWORD : JWT_USER_SECRET,
    JWT_ADMIN_PASSWORD : JWT_ADMIN_SECRET
}