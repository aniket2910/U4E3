// import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Input } from "./Login";

// add style for form
export const Form = styled.form``;
// add style for text area
export const Textarea = styled.textarea``;

export const EditBookData = () => {
  let params = useParams();
  const [formData, setFormData] = useState({
    id: null,
    thumbnailUrl: "",
    longDescription: "",
  });
  let { id } = params;

  useEffect(() => {
    setFormData({
      ...formData,
      id: id,
    });
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(formData);
    // make a PATCH request to http://localhost:8080/books/${id} and update thubnail and long description fields
    // on successfull request navigate to previous page
    let res = await fetch(`http://localhost:8080/books/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    });
    let data = await res.json();
    console.log(data);
  };

  return (
    <>
      <Form onSubmit={handleUpdate}>
        <Input
          data-testid="update-form-thumbnail"
          placeholder="Enter updated thumbnail url"
          onChange={(e) =>
            setFormData({
              ...formData,
              thumbnailUrl: e.target.value,
            })
          }
        />
        <Textarea
          data-testid="update-form-description"
          placeholder="Update long Description"
          onChange={(e) =>
            setFormData({
              ...formData,
              longDescription: e.target.value,
            })
          }
        />
        <Input dat-testid="update-form-submit" type="submit" value="Update" />
      </Form>
    </>
  );
};
