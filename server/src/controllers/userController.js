const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const { createUser, deleteUser, updateUser, findAllUsers, findUserById } = require("../model/userModel");

const app = express();
app.use(express.json());

const createuser = async (req, res) => {
    const { name, email, password, role} = req.body;

    try {
        const newuser = await createUser(name, email, password, role);

        if(!newuser) {
            return res.status(400).json({ message: "Failed to create user" });
        }

        res.status(201).json(newuser);
    } catch (error) {
        res.status(500).json({"Failed to create new user cause: ": error.message});
    }
}

const allusers = async (req, res) => {
    try {
        const users = await findAllUsers();
        if(!users) {
            return res.status(404).json({ message: "No users found" });
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({"Failed to fetch users cause: ": error.message});
    }
}

const finduserbyid = async (req, res) => {
    const { id } = req.params;
    try {
        const founduser = await findUserById(id);
        if(!founduser) {
            return res.status(404).json({message: "User not found with id ${id}"});
        }
        res.status(200).json(founduser);
    } catch (error) {
        res.status(500).json({"Failed to fetch user cause: ": error.message});
    }
}

const finduserbyemail = async (req, res) => {
    const {email} = req.body;
    try {
        const founduser = await findUserByEmail(email);
        if(!founduser) {
            return res.status(404).json({message: "User not found with email ${email}"});
        }
        res.status(400).json(founduser);
    } catch (error) {
        res.status(500).json({"Failed to fetch user cause: ": error.message});
    }
}

const deleteuser = async (req, res) => {
    const { id } = req. params;

    try {
        const deleteduser = await deleteUser(id);

        if(!deleteduser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(deleteduser);
    } catch (error) {
        res.status(500).json({"Failed to delete user cause: ": error.message});
    }
}

const updateuser = async (req, res) => {
    const { id } = req.params;
    const { name, email, role } = req.body;

    try {
        const updateduser = await updateUser(id, name, email, role);

        if(!updateduser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(updateduser);
    } catch (error) {
        res.status(500).json({"Failed to update user cause: ": error.message});
    }
}

module.exports = {
    createuser,
    updateuser, 
    deleteuser,
    allusers,
    finduserbyid,
    finduserbyemail
}