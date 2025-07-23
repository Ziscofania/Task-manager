const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
name: {
    type: String,
    required: [true, "El nombre es obligatorio"]
},
email: {
    type: String,
    required: [true, "El correo es obligatorio"],
    unique: true
},
password: {
    type: String,
    required: [true, "La contraseña es obligatoria"],
    minlength: 6
}
});

// Hashear la contraseña antes de guardar
userSchema.pre("save", async function (next) {
if (!this.isModified("password")) return next();
const salt = await bcrypt.genSalt(10);
this.password = await bcrypt.hash(this.password, salt);
next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
