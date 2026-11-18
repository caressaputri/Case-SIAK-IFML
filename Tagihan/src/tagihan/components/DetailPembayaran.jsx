
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deletePembayaran from '../services/deletePembayaran'
import * as Layouts from "@/commons/layouts";

const DetailPembayaran = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const ubah = async () => {
      navigate(
        '/pembayaran/ubah?'
        + `id=${data.id}`
        
      );
    };
    const hapus = async () => {
      await deletePembayaran({
        id: data.id,
      });
  	navigate('/pembayaran');
    }
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "nomorReferensi",
                  condition: "",
                  label: "Nomor Referensi",
                  featureName: "paymentId",
                }
        ,        {
                  id: "amount",
                  condition: "",
                  label: "Amount",
                  featureName: "amount",
                }
        ,        {
                  id: "status",
                  condition: "",
                  label: "Status",
                  featureName: "status",
                }
        ,        {
                  id: "metodePembayaran",
                  condition: "",
                  label: "Metode Pembayaran",
                  featureName: "metodePembayaran",
                }
        
      ]}
      itemsEvents={[
          <Button
            id="_fR903VDAEfGp8EDN64XzOZ"
            variant="secondary"
            onClick={() => ubah()}
          >
            Ubah
          </Button>
        ,
          <Button
          id="_bJm4-Zy0EfGp8EDN64XzOZ"
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

export default DetailPembayaran;
