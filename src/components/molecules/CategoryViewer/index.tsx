import Spinner from "@Components/atoms/Spinner";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategoryByIdRequest } from "src/services/actions/category.action";
import { RootState } from "src/services/reducers";

const CategoryViewer = () => {
  const { identifier } = useParams();
  const dispatch = useDispatch();
  const { current, pending } = useSelector(
    (globalState: RootState) => globalState.category
  );
  useEffect(() => {
    if (identifier) {
      dispatch(getCategoryByIdRequest(identifier));
    }
  }, [identifier, dispatch]);
  return (
    <>
      <Spinner active={pending} />
      <div style={{ fontSize: "50px", color: "#ca1bff" }}>
        <div>{current && current.name}</div>
      </div>
    </>
  );
};
export default CategoryViewer;
