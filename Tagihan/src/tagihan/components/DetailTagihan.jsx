
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";

const DetailTagihan = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "jumlahTagihan",
                  condition: "isCurrency",
                  label: "Jumlah Tagihan",
                  featureName: "jumlahTagihan",
                }
        ,        {
                  id: "statusPembayaran",
                  condition: "",
                  label: "Status Pembayaran",
                  featureName: "statusPembayaran",
                }
        ,        {
                  id: "jatuhTempo",
                  condition: "",
                  label: "Jatuh Tempo",
                  featureName: "jatuhTempo",
                }
        ,        {
                  id: "semester",
                  condition: "",
                  label: "Semester",
                  featureName: "semesterimpl",
                }
        ,        {
                  id: "id",
                  condition: "",
                  label: "id",
                  featureName: "id",
                }
        
      ]}
      itemsEvents={[
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default DetailTagihan;
