import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getShowsByQuery } from "../../store/showsSlice";
const Display: React.FC = () => {
    const dispatch = useAppDispatch();
    const { query, shows } = useAppSelector((state) => state.shows);

return (
    <>
    <div>
        <input
            type="text"
            value={query}
            onChange={(e) => dispatch(getShowsByQuery({ query: e.target.value }))}
        />
    </div>
    <ul>
        {shows?.map((item: any, index: number) => (
            <Link to={`/shows/${item.show.id}`}>
                <li key={index}>{item.show.name}</li>
            </Link>
        ))}
    </ul>
</>
);
};

export default Display;