
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deletePengisianRencanaStudi from '../services/deletePengisianRencanaStudi'
import * as Layouts from "@/commons/layouts";

const DetailIRS = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const tambahKelas = async () => {
      navigate(
        '/irs/tambah?'
      );
    };
    const hapus = async () => {
      await deletePengisianRencanaStudi({
        id: data.id,
      });
  	navigate('/irs/ringkasan');
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
                  id: "mulai",
                  condition: "",
                  label: "Mulai",
                  featureName: "mulai",
                }
        ,        {
                  id: "akhir",
                  condition: "",
                  label: "Akhir",
                  featureName: "akhir",
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
            id="_7Oqtm03HEfG-v_SjnFPC1a"
            variant="secondary"
            onClick={() => tambahKelas()}
          >
            Tambah Kelas
          </Button>
        ,
          <Button
          id="_Mx_P7gH3EfG-v_SjnFPC1a"
          variant="secondary"
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

export default DetailIRS;
