import React from "react";
import styles from "./userblock.css";
import { EColor, EIcon } from "../enums";
import { Icon } from "../Icon";
import { Text } from "../Text";

interface IUserBlockProps {
  avatarSrc?: string;
  userName?: string;
  loading?: boolean;
}

export function UserBlock(props: Partial<IUserBlockProps>) {
  const { avatarSrc, userName, loading } = props;

  const clientId =
    process.env.NODE_ENV === "development"
      ? process.env.CLIENT_ID_DEV
      : process.env.CLIENT_ID;
  const redirect =
    process.env.NODE_ENV === "development"
      ? process.env.REDIRECT_DEV
      : process.env.REDIRECT;

  return (
    <a
      href={`https://www.reddit.com/api/v1/authorize?client_id=${clientId}&response_type=code&state=random_string&redirect_uri=${redirect}&duration=permanent&scope=identity read submit`}
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt="user avatar"
            className={styles.avatarImage}
          />
        ) : (
          <Icon name={EIcon.anon} size={50} />
        )}
      </div>

      <div className={styles.username}>
        {loading ? (
          <Text size={20} color={EColor.grey99}>
            Загрузка...
          </Text>
        ) : (
          <Text size={20} color={userName ? EColor.black : EColor.grey99}>
            {userName || "Авторизуйтесь"}
          </Text>
        )}
      </div>
    </a>
  );
}
