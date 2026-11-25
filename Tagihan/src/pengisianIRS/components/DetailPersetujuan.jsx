
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';
import setujuiPengisianRencanaStudi from '../services/setujuiPengisianRencanaStudi'
import tolakPengisianRencanaStudi from '../services/tolakPengisianRencanaStudi'
import * as Layouts from "@/commons/layouts";

const DetailPersetujuan = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const setujui = async () => {
      await setujuiPengisianRencanaStudi({
        id: data.id,
      });
  	navigate('/irs/persetujuan');
    }
    const tolak = async () => {
      await tolakPengisianRencanaStudi({
        id: data.id,
      });
  	navigate('/irs/persetujuan');
    }
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "nPM",
                  condition: "",
                  label: "NPM",
                  featureName: "npm",
                }
        ,        {
                  id: "namaMahasiswa",
                  condition: "",
                  label: "Nama Mahasiswa",
                  featureName: "nama",
                }
        ,        {
                  id: "status",
                  condition: "",
                  label: "Status",
                  featureName: "status",
                }
        ,        {
                  id: "totalSKS",
                  condition: "",
                  label: "Total SKS",
                  featureName: "totalSks",
                }
        ,        {
                  id: "alasanPembatalan",
                  condition: "",
                  label: "Alasan Pembatalan",
                  featureName: "alasanPembatalan",
                }
        
      ]}
      itemsEvents={[
          <Button
            id="_zwTkzrI7EfG-v_SjnFPC1a"
            variant="secondary"
            onClick={() => setujui()}
          >
            Setujui
          </Button>
        ,
          <Button
          id="_9wxhRmFSEfG-v_SjnFPC1a"
          variant="secondary"
          onClick={() => tolak()}
        >
          Tolak
        </Button>
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default DetailPersetujuan;
