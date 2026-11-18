
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';
import * as Layouts from "@/commons/layouts";
const PembayaranTable = ({ listPembayaran,
		 

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (pembayaranItem) => {
    isMobile() && navigate(`/pembayaran/${pembayaranItem.id}`
    );
  };
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listPembayaran]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "nomorReferensi",
            condition: "",
            label: "Nomor Referensi",
            featureName: "paymentId",
            editable: false
          }
  ,        {
            id: "amount",
            condition: "",
            label: "Amount",
            featureName: "amount",
            editable: false
          }
  ,        {
            id: "status",
            condition: "",
            label: "Status",
            featureName: "status",
            editable: false
          }
  ,        {
            id: "metodePembayaran",
            condition: "",
            label: "Metode Pembayaran",
            featureName: "metodePembayaran",
            editable: false
          }
  ]}
        itemsEvents={(pembayaranItem) => [
          <Link to={`/pembayaran/${pembayaranItem.id}`}>
            <Button
              id="xEvDetailPemb"
              size="sm"
              variant=
                  "primary"
            >
              Detail
            </Button>
          </Link>
        ]}
  	/>
  </>
  )
};

export default PembayaranTable;
