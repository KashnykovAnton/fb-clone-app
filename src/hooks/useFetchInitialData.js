import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProfile } from "../store/profile/profile-thunks";
import { fetchAllPosts } from "../store/posts/posts-thunks";
import { fetchAllFriends } from "../store/friends/friends-thunks";
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

export const useFetchInitialFriendsData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllFriends());
  }, [dispatch]);
};

export const useFetchInitialUsersData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);
};