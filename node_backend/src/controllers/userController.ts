import { Request, Response } from "express";
import User from "../models/User";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  console.log(`Fetching user with id: ${req.params.id}`);

  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send(`User with id ${req.params.id} not found`);
    }
    res.json(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.json(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.send("User deleted");
  } catch (err) {
    res.status(500).send(err);
  }
};
