//This size is compatible with SMCT Carmen and SMCT Tanza 2
import { useAuth } from "@/context/authcontext";
import { PrintPageProps } from "@/types/types";
import CR_TypeA from "@/utils/CR_TypeA";
import React, { useEffect } from "react";

const CollectionReceipt: React.FC<PrintPageProps> = ({ data }) => {
  const { user } = useAuth();

  useEffect(() => {
    window.print();
  }, []);

  return (
    <div>
      {user?.branchName === "SMCT Carmen" || "SMCT Tanza 2" ? (
        <CR_TypeA data={data} />
      ) : (
        <>None</>
      )}
    </div>
  );
};

export default CollectionReceipt;
