import { rest } from "msw";
import { courseData, courses } from "./mock-data/courses";

const baseURL = process.env.VITE_API_URL || 'http://localhost:8080/api';

export const handlers = [
  rest.get(
    `${baseURL}/student/courses`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(courses));
    }
  ),
  rest.get(
    `${baseURL}/student/getCourse/:id`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(courseData));
    }
  ),
];
