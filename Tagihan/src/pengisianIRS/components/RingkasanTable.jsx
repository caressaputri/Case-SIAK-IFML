
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';
import * as Layouts from "@/commons/layouts";
const RingkasanTable = ({ listRingkasan,
		 

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (ringkasanItem) => {
    isMobile() && navigate(`/irs/${ringkasanItem.id}`
    );
  };
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listRingkasan]}
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
        itemsEvents={(ringkasanItem) => [
          <Link to={`/irs/${ringkasanItem.id}`}>
            <Button
              id="_wFvWevHsEfG-v_SjnFPC1a"
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

export default RingkasanTable;
