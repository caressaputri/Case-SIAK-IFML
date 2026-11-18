
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";
const MataTable = ({ listMataKuliah,
		 

	}) => {
  const { checkPermission } = useAuth();
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listMataKuliah]}
  	  itemsAttrs={[
          {
            id: "namaKelas",
            condition: "",
            label: "Nama Kelas",
            featureName: "nama",
            editable: false
          }
  ,        {
            id: "kapasitas",
            condition: "",
            label: "Kapasitas",
            featureName: "kapasitas",
            editable: false
          }
  ]}
        itemsEvents={(mataItem) => [
        ]}
  	/>
  </>
  )
};

export default MataTable;
