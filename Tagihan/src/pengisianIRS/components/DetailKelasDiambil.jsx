
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';
import deleteKelasMahasiswa from '../services/deleteKelasMahasiswa'
import * as Layouts from "@/commons/layouts";

const DetailKelasDiambil = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const hapus = async () => {
      await deleteKelasMahasiswa({
        id: data.id,
      });
  	navigate('/irs/kelas');
    }
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "kelas",
                  condition: "",
                  label: "Kelas",
                  featureName: "kelasimpl",
                }
        ,        {
                  id: "iRS",
                  condition: "",
                  label: "IRS",
                  featureName: "pengisianrencanastudiimpl",
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
            id="yEvHapusKM"
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

export default DetailKelasDiambil;
