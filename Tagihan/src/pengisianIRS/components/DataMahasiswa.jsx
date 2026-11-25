
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";

const DataMahasiswa = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "nPM",
                  condition: "",
                  label: "NPM",
                  featureName: "npm",
                }
        ,        {
                  id: "namaMahasiswa",
                  condition: "",
                  label: "Nama Mahasiswa",
                  featureName: "nama",
                }
        
      ]}
      itemsEvents={[
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default DataMahasiswa;
