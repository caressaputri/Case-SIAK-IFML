
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';
import * as Layouts from "@/commons/layouts";
const KelasTable = ({ kelasRencanaStudiDataList,
		 

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (kelasItem) => {
    isMobile() && navigate();
  };
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[kelasRencanaStudiDataList]}
  	  detail={detail}
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
  ,        {
            id: "jadwal",
            condition: "",
            label: "Jadwal",
            featureName: "hari",
            editable: false
          }
  ,        {
            id: "ruangan",
            condition: "",
            label: "Ruangan",
            featureName: "nama",
            editable: false
          }
  ,        {
            id: "pengajar",
            condition: "",
            label: "Pengajar",
            featureName: "nama",
            editable: false
          }
  ,        {
            id: "periode",
            condition: "",
            label: "Periode",
            featureName: "kode",
            editable: false
          }
  ]}
        itemsEvents={(kelasItem) => [
          
        ]}
  	/>
  </>
  )
};

export default KelasTable;
