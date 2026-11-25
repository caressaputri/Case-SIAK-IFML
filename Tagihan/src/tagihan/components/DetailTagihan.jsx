
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';
import konfirmasiTagihan from '../services/konfirmasiTagihan'
import * as Layouts from "@/commons/layouts";

const DetailTagihan = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const konfirmasiPembayaran = async () => {
      await konfirmasiTagihan({
        id: data.id,
      });
  	navigate('/tagihan');
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
                  id: "jumlahTerbayar",
                  condition: "isCurrency",
                  label: "Jumlah Terbayar",
                  featureName: "jumlahTerbayar",
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
            id="_GL1P5KF3EfGG8dLC5rTvHA"
            variant="secondary"
            onClick={() => konfirmasiPembayaran()}
          >
            Konfirmasi Pembayaran
          </Button>
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default DetailTagihan;
