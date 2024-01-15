import s from "./Developers.module.scss";
export const Developers = () => (
  <ul className={s.developers}>
    <li className={s.item}>
      Designer:&nbsp;
      <a
        className={s.link}
        href="https://t.me/Mrshmalloww"
        target="_blank"
        rel="noreferrer">
        Anastasia Ilina
      </a>
    </li>
    <li className={s.item}>
      Developer:&nbsp;
      <a className={s.link} href="" target="_blank" rel="noreferrer">
        Egor Toropov
      </a>
    </li>
  </ul>
);
