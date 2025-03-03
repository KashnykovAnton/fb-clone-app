import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProfile } from "../store/profile/profile-thunks";
import { fetchAllPosts } from "../store/posts/posts-thunks";
import { fetchAllUsers } from "../store/users/users-thunks";

export const useFetchInitialProfileData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);
};

export const useFetchInitialPostsData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);
};

export const useFetchInitialUsersData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);
};