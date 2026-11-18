
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';
import * as Layouts from "@/commons/layouts";
const IRSTable = ({ listIRS,
		 

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (iRSItem) => {
    isMobile() && navigate(`/irs/${iRSItem.id}`
    );
  };
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listIRS]}
  	  detail={detail}
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
  ]}
        itemsEvents={(iRSItem) => [
          <Link to={`/irs/${iRSItem.id}`}>
            <Button
              id="yEvDtlIRS"
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

export default IRSTable;
