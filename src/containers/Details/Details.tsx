import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getShowsById } from "../../store/showsSlice";

const Details = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { currentShow } = useAppSelector((state) => state.shows);
  useEffect(() => {
    dispatch(getShowsById({ id: id }));
  }, [id]);
  console.log(currentShow);

  return (
    <>
      <img className={'w-25 d-flex justify-content-center'} src={currentShow?.image.original} alt="image films" />
      <h1 className={'text-center'}>{currentShow?.name}</h1>
      <p>{currentShow?.summary}</p>
    </>
  );
};
export default Details;
