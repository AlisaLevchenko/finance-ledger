import s from "./Blog.module.scss";
import Button from "../button/Button";

export default function Blog() {
  return (
    <div className={s.container}>
      <div className={s.blog}>
        <p className={s.titleLabel}>April 16 2020</p>
        <h2 className={s.title}>Blog Post One</h2>
        <p className={s.titleDescription}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <Button label="Read Our Blog" bordered={true} hoverColor="blue" />
        <img src="" alt="" />
      </div>
    </div>
  );
}
