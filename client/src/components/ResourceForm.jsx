export default function ResourceForm({
  onSubmit,
  register,
  errors,
  isSubmitting,
  buttonText,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white p-6 rounded-xl shadow-md max-w-lg mx-auto space-y-4"
    >
      <h2 className="text-xl font-semibold mb-4">{buttonText}</h2>

      {/* Title */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          {...register("title", {
            required: "Title is required",
            minLength: {
              value: 3,
              message: "Title must be at least 3 characters",
            },
          })}
          placeholder="e.g., Introduction to React Hooks"
          className="w-full border p-2 rounded-xl" 
        />
        {errors.title && (
          <p id="titleError" role="alert" className="text-red-600 text-sm mt-1">
            {errors.title.message}
          </p>
        )}
      </div>

      {/* Description */}
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          {...register("description", {
            required: "Description is required",
            minLength: {
              value: 10,
              message: "Description must be at least 10 characters",
            },
          })}
          placeholder="What is this resource about? Mention key points or topics covered."
          rows="4"
          className="w-full border p-2 rounded-xl"
        />
        {errors.description && (
          <p id="descriptionError" role="alert" className="text-red-600 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Type */}
      <div className="mb-4">
        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
          Type <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <select
          {...register("type", {
            required: "Please select a resource type",
          })}
          className="w-full border p-2 rounded-xl"
        >
          <option value="">Select a type...</option>
          <option value="Article">Article</option>
          <option value="Video">Video</option>
          <option value="Tutorial">Tutorial</option>
        </select>
        {errors.type && (
          <p id="typeError" role="alert" className="text-red-600 text-sm mt-1">
            {errors.type.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-indigo-600 text-white w-full py-2 rounded-xl"
      >
        {isSubmitting ? "Saving..." : buttonText}
      </button>
    </form>
  );
}
