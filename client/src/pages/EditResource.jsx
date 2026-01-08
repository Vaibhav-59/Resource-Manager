import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  getResourceById,
  updateResource,
} from "../services/resourceService";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ResourceForm from "../components/ResourceForm";
import toast from "react-hot-toast";

export default function EditResource() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    getResourceById(id).then((res) => {
      setValue("title", res.data.title);
      setValue("description", res.data.description);
      setValue("type", res.data.type);
    });
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      await updateResource(id, data);
      toast.success("Resource updated successfully ✨");
      navigate("/");
    } catch (err) {
      toast.error("Update failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-6">
        <ResourceForm
          register={register}
          errors={errors}
          isSubmitting={isSubmitting}
          onSubmit={handleSubmit(onSubmit)}
          buttonText="Update Resource"
        />
      </div>
    </>
  );
}
