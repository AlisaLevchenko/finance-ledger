import s from "./Blog.module.scss";
import Button from "../button/Button";

export default function Blog() {
  return (
    <article className={s.blogSection} id="blog">
      <picture className={s.blogImageMob}>
        <source
          srcSet={`${require("../../images/blog/blog.webp")} 1x, ${require("../../images/blog/blog@2x.webp")} 2x`}
          type="image/webp"
        />
        <source
          srcSet={`${require("../../images/blog/blog.jpg")} 1x, ${require("../../images/blog/blog@2x.jpg")} 2x`}
          type="image/jpeg"
        />
        <img
          src={require("../../images/blog/blog.jpg")}
          alt="table whith a diary and cup of coffee"
        />
      </picture>
      <div className={s.leftBG}></div>
      <div className={`${s.rightBG} ${s.rightBGWebp}`}></div>
      <div className={s.container}>
        <div className={s.blogInner}>
          <p className={s.titleLabel}>April 16 2020</p>
          <h2 className={s.title}>Blog Post One</h2>
          <p className={s.titleDescription}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>
          <a href="/" target="_blank" rel="noopener noreferrer nofollow">
            <Button
              label="Read Our Blog"
              type="button"
              bordered={true}
              hoverColor="blue"
            />
          </a>
        </div>
      </div>
    </article>
  );
}
