import { useForm } from "react-hook-form";
import { createResource } from "../services/resourceService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import ResourceForm from "../components/ResourceForm";

export default function AddResource() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await createResource(data);
      toast.success("Resource created successfully ✅");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to create resource");
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
          buttonText="Create Resource"
        />
      </div>
    </>
  );
}
