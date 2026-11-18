
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';
import * as Layouts from "@/commons/layouts";
const PengambilanTable = ({ listKelasDiambil,
		 

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (pengambilanItem) => {
    isMobile() && navigate(`/irs/kelas/${pengambilanItem.id}`
    );
  };
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listKelasDiambil]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "id",
            condition: "",
            label: "id",
            featureName: "id",
            editable: false
          }
  ]}
        itemsEvents={(pengambilanItem) => [
          <Link to={`/irs/kelas/${pengambilanItem.id}`}>
            <Button
              id="yEvDtlKM"
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

export default PengambilanTable;
