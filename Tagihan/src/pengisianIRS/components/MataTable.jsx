
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";
const MataTable = ({ listMataKuliah,
		 

		handleChange,
		itemId,
	}) => {
  const { checkPermission } = useAuth();
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listMataKuliah]}
  	  itemId={itemId}
  	  handleChange={handleChange}
  	  itemsAttrs={[
          {
            id: "id",
            condition: "",
            label: "id",
            featureName: "id",
            editable: false
          }
  ,        {
            id: "selectionField",
            condition: "",
            label: "Selection Field",
            featureName: "",
            editable: true
          }
  ,        {
            id: "select",
            condition: "",
            label: "Select",
            featureName: "",
            editable: true
          }
  ,        {
            id: "namaMataKuliah",
            condition: "",
            label: "Nama Mata Kuliah",
            featureName: "nama",
            editable: false
          }
  ,        {
            id: "kapasitas",
            condition: "",
            label: "Kapasitas",
            featureName: "kapasitas",
            editable: false
          }
  ,        {
            id: "mataKuliah",
            condition: "",
            label: "Mata Kuliah",
            featureName: "matakuliahimpl",
            editable: false
          }
  ,        {
            id: "semester",
            condition: "",
            label: "Semester",
            featureName: "semesterimpl",
            editable: false
          }
  ]}
        itemsEvents={(mataItem) => [
        ]}
  	/>
  </>
  )
};

export default MataTable;
