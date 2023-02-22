import styles from "./Content.module.css";
import { gameData } from "./data";
import { Header } from "../header";
import { Table } from "../table";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { GameData } from "../../types";
import { useEffect, useState } from "react";

const mock = new MockAdapter(axios);

mock.onGet("/gameData").reply(function () {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve([200, gameData]);
    }, 1000);
  });
});

const Content = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<GameData>();

  useEffect(() => {
    (async () => {
      setLoading(true);

      const response = await axios.get("/gameData");

      setData(response.data as GameData);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <Header winner={data?.winner} loading={loading} />
      <div className={styles.wrapper}>
        {loading ? (
          <span className={styles.loader} />
        ) : (
          <>
            <Table team={data?.orange} />
            <Table team={data?.cyan} />
          </>
        )}
      </div>
    </>
  );
};

export default Content;
