import { useDispatch, useSelector } from "react-redux";
import { Goods } from "../../components/Goods/Goods.jsx";
import { Catalog } from "../../components/Catalog/Catalog.jsx";
import s from "./Main.module.scss";
import { useEffect } from "react";
import { fetchCategories } from '../../store/categories/categories.slice.js';

export const Main = () => {
  const dispatch = useDispatch();
  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories
  } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loadingCategories) {
    return <div>Загрузка...</div>
  }
  if (errorCategories) {
    return <div>Ошибка: {errorCategories}</div>
  }
  return (
    <main>
      <Catalog data={dataCategories} />
      <Goods />
    </main>
  );
}
