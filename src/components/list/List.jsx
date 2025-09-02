import { useEffect, useState } from "react";
import "./list.scss";
import Card from "../card/Card";
import apiClient from "../../lib/apiClient"; // Import your API client

function List() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        // Fetch real data from your API
        const res = await apiClient.get("/properties");
        setProperties(res.data.items);
      } catch (err) {
        console.error("Failed to fetch properties", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <div>Loading properties...</div>;
  }

  return (
    <div className="list">
      {properties.map((item) => (
        // Use item._id which is the correct MongoDB ID
        <Card key={item._id} item={item} />
      ))}
    </div>
  );
}

export default List;

// import "./list.scss";
// import Card from "../card/Card";
// import { listData } from "../../lib/dummydata";

// function List() {
//   return (
//     <div className="list">
//       {listData.map((item) => (
//         <Card key={item.id} item={item} />
//       ))}
//     </div>
//   );
// }

// export default List;
