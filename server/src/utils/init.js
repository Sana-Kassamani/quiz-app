import express from "express";
import dotenv from "dotenv";

export const initApp = (app) => {
  app.use(express.json());
  dotenv.config();
};

export const registerRoutes = (app, ...routers) => {
  routers.forEach((router) => {
    router.middlewares.length === 0
      ? app.use(router.prefix, router.router)
      : app.use(router.prefix, router.middlewares, router.router);
  });
};
