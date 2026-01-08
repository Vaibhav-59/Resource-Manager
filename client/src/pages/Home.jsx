import { useEffect, useState } from "react";
import { getResources, deleteResource } from "../services/resourceService";
import ResourceCard from "../components/ResourceCard";
import Navbar from "../components/Navbar";
import SearchFilter from "../components/SearchFilter";
import toast from "react-hot-toast";

export default function Home() {
  const [resources, setResources] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  const fetchResources = async () => {
    const res = await getResources();
    setResources(res.data);
  };

  useEffect(() => {
    fetchResources();
  }, []);

  const handleDelete = async (id) => {
    if (confirm("Are you sure?")) {
      try {
        await deleteResource(id);
        toast.success("Resource deleted");
        fetchResources();
      } catch {
        toast.error("Delete failed");
      }
    }
  };

  //FILTER LOGIC
  const filteredResources = resources.filter((resource) => {
    const matchesSearch = resource.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesType = type
      ? resource.type === type
      : true;

    return matchesSearch && matchesType;
  });

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-6xl mx-auto">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          type={type}
          setType={setType}
        />

        {filteredResources.length === 0 && (
          <p className="text-center text-gray-500">
            No matching resources found
          </p>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map((resource) => (
            <ResourceCard
              key={resource._id}
              resource={resource}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </>
  );
}
