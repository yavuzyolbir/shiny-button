import Button from "components/Button";

import Styles from "./Home.module.scss";

function Home() {
  return (
    <div className={Styles.wrapper}>
      <Button variant="gradient" block>
        Hover Me!
      </Button>
    </div>
  );
}

export default Home;
