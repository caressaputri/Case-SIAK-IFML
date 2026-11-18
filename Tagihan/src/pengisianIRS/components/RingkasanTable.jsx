
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";
const RingkasanTable = ({ listRingkasan,
	}) => {
  const { checkPermission } = useAuth();
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listRingkasan]}
  	  itemsAttrs={[
          {
            id: "status",
            condition: "",
            label: "Status",
            featureName: "status",
            editable: false
          }
  ,        {
            id: "totalSKS",
            condition: "",
            label: "Total SKS",
            featureName: "totalSks",
            editable: false
          }
  ,        {
            id: "mulai",
            condition: "",
            label: "Mulai",
            featureName: "mulai",
            editable: false
          }
  ,        {
            id: "akhir",
            condition: "",
            label: "Akhir",
            featureName: "akhir",
            editable: false
          }
  ,        {
            id: "alasanPembatalan",
            condition: "",
            label: "Alasan Pembatalan",
            featureName: "alasanPembatalan",
            editable: false
          }
  ]}
  	/>
  </>
  )
};

export default RingkasanTable;
