import React, { memo } from "react";
import styles from "./card.css";
import { PostInfo } from "./PostInfo";
import { KarmaCounter } from "../KarmaCounter";
import { CardMenu } from "./CardMenu";
import { MobButtonsLine } from "./MobButtonsLine";

interface IDataProps {
  postUrl: string;
  avatarSrc: string;
  author: string;
  userUrl: string;
  publichedTime: string;
  title: string;
  previewImg: string;
  karma: number;
  numComments: number;
  id: string;
}

export const Card = memo((props: Partial<IDataProps>) => {
  const defaultImage =
    "https://kinesiotaping.ru/wp-content/plugins/ht-mega-for-elementor/assets/images/image-placeholder.png";
  const {
    avatarSrc = "",
    author = "",
    userUrl = "",
    publichedTime = "",
    title = "",
    previewImg,
    karma = 0,
    numComments = 0,
    id = "",
  } = props;

  const image = isImage(props.previewImg) ? previewImg : defaultImage;

  return (
    <div className={styles.card}>
      <PostInfo
        avatarSrc={avatarSrc}
        userName={author}
        userUrl={userUrl}
        publichedTime={publichedTime}
        title={title}
        postId={id}
      />
      <CardMenu />
      <MobButtonsLine numComments={numComments} />
      <KarmaCounter value={karma} />
      <img className={styles.previewImg} src={image} alt="preview" />
    </div>
  );
});

const isImage = (url: string | undefined) =>
  url ? /\.(jpg|jpeg|png|webp|gif)$/.test(url) : false;
