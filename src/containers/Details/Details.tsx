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
      <img src={currentShow?.image.original} alt="image films" />
      <h1>{currentShow?.name}</h1>
    </>
  );
};
export default Details;
