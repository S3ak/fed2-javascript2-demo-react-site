import { Router, Route, RootRoute } from "@tanstack/react-router";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import ProfilePage from "./pages/Profile";
import PostsPage from "./pages/Posts";
import PostPage from "./pages/Post";
import Root from "./App";

const rootRoute = new RootRoute({
  component: Root,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

const registerRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: RegisterPage,
});

const profileRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: ProfilePage,
});

const postsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/posts",
  component: PostsPage,
});

const postRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/posts/$postId",
  component: PostPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  profileRoute,
  postsRoute,
  postRoute,
  registerRoute,
]);

export const router = new Router({ routeTree });

export default router;
