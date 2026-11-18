
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteTagihan from '../services/deleteTagihan'
import * as Layouts from "@/commons/layouts";

const DetailTagihan = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const ubah = async () => {
      navigate(
        '/tagihan/ubah?'
        + `id=${data.id}`
        
      );
    };
    const hapus = async () => {
      await deleteTagihan({
        id: data.id,
      });
  	navigate('/tagihan');
    }
  
  
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
                  id: "id",
                  condition: "",
                  label: "id",
                  featureName: "id",
                }
        
      ]}
      itemsEvents={[
          <Button
            id="_-2djTerZEfGp8EDN64XzOZ"
            variant="secondary"
            onClick={() => ubah()}
          >
            Ubah
          </Button>
        ,
          <Button
          id="_np_tDwaUEfGp8EDN64XzOZ"
          variant="tertiary"
          onClick={() => hapus()}
        >
          Hapus
        </Button>
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default DetailTagihan;
