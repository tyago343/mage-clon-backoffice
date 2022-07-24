import Button from "@Components/atoms/Button";
import Input from "@Components/atoms/Input";
import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { createCategoryRequest } from "src/services/actions/category.action";

const CreateCategory = () => {
  const dispatch = useDispatch()
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target: any = event.target
    const { name, position } = target.elements;
    dispatch(createCategoryRequest({ name: name.value, position: position.value }))
  }
  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <Input type="text" name="name" id="name" label="Name" required={true} />
        <Input type="text" name="position" id="position" label="Position" />
        <Button type="submit">Create</Button>
      </form>
    </div>
  )
}
export default CreateCategory;