import { createUser } from "../../models/user/user-model.js";
import { getUserByCpf } from "../../models/user/user-model.js";
import { updateUser } from "../../models/user/user-model.js";
import { deleteUser } from "../../models/user/user-model.js";

  async function createUserController(req, res) {
    try {
      const userData = req.body;
      const newUser = await createUser(userData);
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Failed to create user' });
    }

  }

  async function getUserByCpfController(req, res) {
    try {
      const cpf = req.params.cpf;
      const user = await getUserByCpf(cpf);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching user by CPF:', error);
      res.status(500).json({ error: 'Failed to fetch user' });
    }
  }


  async function updateUserController(req, res) {
    try {
      const cpf = req.params.cpf;
      const userData = req.body;
      const updatedUser = await updateUser(cpf, userData);
      if (updatedUser) {
        res.status(200).json(updatedUser);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ error: 'Failed to update user' });
    }
  }

  async function deleteUserController(req, res) {
    try {
      const cpf = req.params.cpf;
      const deletedUser = await deleteUser(cpf);
      if (deletedUser) {
        res.status(200).json(deletedUser);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ error: 'Failed to delete user' });
    }
  }


export {
    createUserController,
    getUserByCpfController,
    updateUserController,
    deleteUserController
};