
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";
const TagihanTable = ({ listTagihan,
	}) => {
  const { checkPermission } = useAuth();
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listTagihan]}
  	  itemsAttrs={[
          {
            id: "jumlahTagihan",
            condition: "",
            label: "Jumlah Tagihan",
            featureName: "jumlahTagihan",
            editable: false
          }
  ,        {
            id: "statusPembayaran",
            condition: "",
            label: "Status Pembayaran",
            featureName: "statusPembayaran",
            editable: false
          }
  ,        {
            id: "jatuhTempo",
            condition: "",
            label: "Jatuh Tempo",
            featureName: "jatuhTempo",
            editable: false
          }
  ,        {
            id: "semester",
            condition: "",
            label: "Semester",
            featureName: "semesterimpl",
            editable: false
          }
  ,        {
            id: "mahasiswa",
            condition: "",
            label: "Mahasiswa",
            featureName: "mahasiswaimpl",
            editable: false
          }
  ]}
  	/>
  </>
  )
};

export default TagihanTable;
