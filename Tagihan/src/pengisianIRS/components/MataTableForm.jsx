
import React from "react";
import { useNavigate, useSearchParams } from "react-router";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Form,
  InputField,
  SelectionField,
  MultiSelectionField,
  VisualizationAttr,
  Spinner,
  Modal,
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import MataTable from "../components/MataTable"
import savePengisianRencanaStudi from '../services/savePengisianRencanaStudi'
import { notifyError,notifySuccess } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const MataTableForm = ({ 
	listMataKuliah
	
	, edited
	, itemId
	, handleChange
	, selectedItems
	, setSelectedItems
	, isLoading }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  const navigate = useNavigate()
  const isEmptyValue = (value) => {
  	if (typeof value === "string") {
        return value.trim() === "";
      }
      if (value === null || value === undefined) {
        return true;
      }
      if (typeof value === "object" && !Array.isArray(value)) {
        return Object.values(value).some(isEmptyValue); 
      }
      return false;
  };
  
  const isTextInvalid = edited.some((item) => {
      return Object.values(item).some(isEmptyValue);
    });
  
  const save = (data) => {
  if (isTextInvalid) {
   	notifyError("Input teks tidak boleh kosong.");
      return;
  }
    savePengisianRencanaStudi({
  		data: edited
    })
    .then(({ data: { data } }) => {
  	notifySuccess(`Save Pengisian Rencana Studi berhasil!`);
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
    <Layouts.BatchUpdateFormComponentLayout
  	  onSubmit={handleSubmit(save)}
  
  	  formFields={<Layouts.ListContainerTableLayout
  	  	title={"Table Mata Kuliah"}
  	  	singularName={"Mata"}
  	  	items={[listMataKuliah]}
  	  	isLoading={isLoading}
  	  >
  	  	<MataTable
  	  		itemId={itemId}
  	  		handleChange={handleChange}
  	  		listMataKuliah={listMataKuliah}
  	  		
  	  	/>
  	  </Layouts.ListContainerTableLayout>}
  
  	  itemsEvents={[
  			<Button id="_493BwOG0EfGIXdw6TcAYcQ" key="Save" type="submit" variant="primary">Save</Button>
      ]}
    />
  
  )
}

export default MataTableForm
