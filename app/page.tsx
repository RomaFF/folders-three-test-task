'use client'

import React, { useEffect, useState } from 'react';
import {TreeItem} from "@/types/types";
import Tree from "@/components/three";
import { FileTreeService } from "@/services/TreeService";
import Loader from "@/components/Loader";

const Home = () => {
  const [data, setData] = useState<TreeItem[]>([]);
  const [children, setChildren] = useState<TreeItem[] | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const json = await FileTreeService.fetchTree();
        setData(json);
      } catch (err) {
        setError("Data error");
        console.error('Error', err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);


  if (loading) return <Loader />;
  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">File Tree</h1>

      <div>
        {data.map((item, index) => (
          <Tree key={index} item={item} onNodeClick={setChildren}/>
        ))}

        <div className="mt-5">
          <h2 className="text-lg font-semibold mb-2">Children:</h2>
          {children ? (
            <ul className="list-disc pl-5">
              {children.map((child, index) => (
                <li key={index}>{child.name}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Press on element to see the children</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
