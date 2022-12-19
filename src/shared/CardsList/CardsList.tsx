import React, { useCallback, useRef, useState } from "react";
import styles from "./cardslist.css";
import { Card } from "../Card/Card";
import { useDispatch } from "react-redux";
import { useObserver } from "../../hooks/useObserver";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

export function CardsList() {
  const { posts, isLoading, error } = useTypedSelector(
    (state) => state.postsReducer
  );
  const { postsRequest } = useActions();
  const token = useTypedSelector((state) => state.tokenReducer.data);
  const [counter, setCounter] = useState(0);

  const fn = useCallback(() => {
    postsRequest();
    setCounter((prev) => prev + 1);
  }, []);

  const [ref] = useObserver(fn, [token, !isLoading]);

  return (
    <ul className={styles.cardslist}>
      {!posts.length && !isLoading && (
        <div style={{ textAlign: "center", padding: "20px 0px" }}>
          Постов нет!
        </div>
      )}

      {posts.map((props, index) => (
        <Card {...props} key={props?.id ? props.id + index : index} />
      ))}

      <div ref={ref} hidden={counter >= 2}></div>

      {counter >= 2 && !isLoading && (
        <button className={styles.loadButton} onClick={() => setCounter(0)}>
          Загрузить ещё...
        </button>
      )}

      {isLoading && (
        <div style={{ textAlign: "center", padding: "20px 0px" }}>
          Загрузка...
        </div>
      )}

      {error && (
        <div role="alert" style={{ textAlign: "center" }}>
          {error}
        </div>
      )}
    </ul>
  );
}
