
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';
import * as Layouts from "@/commons/layouts";
const PersetujuanTable = ({ listPersetujuan,
		 

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (persetujuanItem) => {
    isMobile() && navigate(`/irs/persetujuan/${persetujuanItem.id}`
    );
  };
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listPersetujuan]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "nPM",
            condition: "",
            label: "NPM",
            featureName: "npm",
            editable: false
          }
  ,        {
            id: "namaMahasiswa",
            condition: "",
            label: "Nama Mahasiswa",
            featureName: "nama",
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
            id: "totalSKS",
            condition: "",
            label: "Total SKS",
            featureName: "totalSks",
            editable: false
          }
  ]}
        itemsEvents={(persetujuanItem) => [
          <Link to={`/irs/persetujuan/${persetujuanItem.id}`}>
            <Button
              id="_0v-nWRMmEfG-v_SjnFPC1a"
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

export default PersetujuanTable;
