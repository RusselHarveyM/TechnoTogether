import axios from "axios";

const technoAxios = axios.create({
  baseURL: "http://localhost:8080",
});

export const getAllGoals = async () => {
  const result = await technoAxios.get("/goal/getAllGoals");

  return result.data;
};

export const insertGoal = async (goal) => {
  const result = await technoAxios.post("/goal/postGoal", goal);

  return result.data;
};

export const editGoal = async (goal) => {
  const result = await technoAxios.put(`/goal/putGoal?goalid=${goal.goalid}`, {
    learninggoals: goal.learninggoals,
    completed: goal.completed,
  });

  return result.data;
};

export const deleteGoal = async (goalId) => {
  const result = await technoAxios.delete(`/goal/deleteGoal/${goalId}`);

  return result.data;
};
