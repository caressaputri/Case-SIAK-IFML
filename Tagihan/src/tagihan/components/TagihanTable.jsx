
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';
import * as Layouts from "@/commons/layouts";
const TagihanTable = ({ listTagihan,
		 

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (tagihanItem) => {
    isMobile() && navigate(`/tagihan/id_tagihan`
    );
  };
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listTagihan]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "jumlahTagihan",
            condition: "isCurrency",
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
            id: "id_tagihan",
            condition: "",
            label: "id_tagihan",
            featureName: "id",
            editable: false
          }
  ]}
        itemsEvents={(tagihanItem) => [
          <Link to={`/tagihan/id_tagihan`}>
            <Button
              id="_5oN2ENzBEfGG8dLC5rTvHA"
              size="sm"
              variant=
                          "secondary"
            >
              Detail
            </Button>
          </Link>
        ]}
  	/>
  </>
  )
};

export default TagihanTable;
