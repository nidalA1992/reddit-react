import React, { useContext } from "react";
import styles from "./searchBlock.css";
import { UserBlock } from "../../UserBlock";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

export function SearchBlock() {
  const { data, isLoading } = useTypedSelector((state) => state.meReducer);

  return (
    <div className={styles.searchBlock}>
      <UserBlock
        userName={data.name}
        avatarSrc={data.iconImg}
        loading={isLoading}
      />
    </div>
  );
}
